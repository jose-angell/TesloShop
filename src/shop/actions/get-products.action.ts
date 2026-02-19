import { tesloApi } from "@/api/tesloApi"
import type { ProductsResponse } from "@/interfaces/products.response";


interface Options {
    limit?: number | string;
    offset?: number | string;
    sizes?: string;
    gender?: string;
    minPrice?: number;
    maxPrice?: number;
}


export const getProductsAction = async(options: Options): Promise<ProductsResponse> => {
    const {limit, offset, sizes, gender, minPrice, maxPrice} = options;
    const {data} = await tesloApi.get<ProductsResponse>('/products', {
        params:{
            limit,
            offset,
            sizes,
            gender,
            minPrice,
            maxPrice
        }
    });
    const productsWithImageUrl = data.products.map(product => ({
        ...product,
        imagenes: product.images.map(
            image => `${import.meta.env.VITE_API_URL}/files/${image}`
        )
    }))
    return {
        ...data,
        products: productsWithImageUrl,
    };
}