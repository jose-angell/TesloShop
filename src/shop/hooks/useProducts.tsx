import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from "../actions/get-products.action";
import { useSearchParams } from "react-router";



export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const limit = searchParams.get('limit') || 9;
  const page = searchParams.get('offset') || 1;

  const offset = Number(page) - 1 * Number(limit);

  return useQuery ({
    queryKey: ['productos', {offset, limit}],
    queryFn: () => getProductsAction({
      limit: isNaN(+limit) ? 9 : limit, 
      offset: isNaN(offset) ? 0 : offset,
    }),
    staleTime: 1000 * 60 * 5, // 5 minutos se matiene vigente la data, no se vuelve a cargar
  });
}
