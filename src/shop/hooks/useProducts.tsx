import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action";



export const useProducts = () => {
// TODO: falta logica

  return useQuery ({
    queryKey: ['productos'],
    queryFn: getProductsAction
  });
}
