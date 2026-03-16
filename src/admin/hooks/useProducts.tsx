import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from "../actions/get-product-by-id.action"
import { createUpdateProductAction } from "../actions/create-update-product.action";
import type { Product } from "@/interfaces/product.interface";




export const useProducts = (id: string) => {
  const queryClient = useQueryClient()
  const query = useQuery({
    queryKey: ['product', {id}],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, 
  });

const mutation = useMutation({ //actualizacion de la informacion mastrada en la tablas con los nuevos datos
  mutationFn: createUpdateProductAction,
  onSuccess: (product: Product) => {
    // invalidar cache
    queryClient.invalidateQueries({queryKey: ['products']})
    queryClient.invalidateQueries({queryKey: ['product', {id: product.id}]})
    // actualizar queryData
    queryClient.setQueryData(['productos',{id: product.id}], product)
  }
})

  return {
    ...query,
    mutation,
  }
}
