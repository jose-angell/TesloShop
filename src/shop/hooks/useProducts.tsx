import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action";
import { useParams, useSearchParams } from "react-router";



export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get('limit') || 9;
  const page = searchParams.get('offset') || 1;
  const sizes = searchParams.get('sizes') || undefined;
  const offset = Number(page) - 1 * Number(limit);
  const {gender} = useParams();
  return useQuery ({
    queryKey: ['productos', {offset, limit, sizes, gender}],
    queryFn: () => getProductsAction({
      limit: isNaN(+limit) ? 9 : limit, 
      offset: isNaN(offset) ? 0 : offset,
      sizes,
      gender,
    }),
    staleTime: 1000 * 60 * 5, // 5 minutos se matiene vigente la data, no se vuelve a cargar
  });
}
