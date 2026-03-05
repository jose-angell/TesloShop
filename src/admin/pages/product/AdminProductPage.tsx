
import { Navigate, useParams } from 'react-router';


import { useProducts } from '@/admin/hooks/useProducts';
import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductForm } from './ui/ProductForm';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: string[];
  gender: string;
  tags: string[];
  images: string[];
}

export const AdminProductPage = () => {
  const { id } = useParams();

  const {isLoading, isError, data: product} = useProducts(id || '')

  const title = id === 'new' ? 'Nuevo producto' : 'Editar producto';
  const subTitle = id === 'new' ? 'Aqui puedes crear un nuevo producto' : 'Aqui puedes editar el producto';

  if(isError){
    return <Navigate to="/admin/products" />  
  }
  if(isLoading){
    return <CustomFullScreenLoading />
  }

  if(!product){
    return <Navigate to="/admin/products" />  
  }
  
  return <ProductForm title={title} subTitle={subTitle} product={product} />
 
};