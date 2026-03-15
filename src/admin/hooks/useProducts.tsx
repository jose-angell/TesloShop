import { useMutation, useQuery } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import { createUpdateProductAction } from "../actions/create-update-product.action";




export const useProducts = (id: string) => {
  const query = useQuery({
    queryKey: ['product', {id}],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, 
  });

const mutation = useMutation({
  mutationFn: createUpdateProductAction,
  onSuccess: () => {
    console.log('mutacion')
  }
})

  return {
    ...query,
    mutation,
  }
}
