import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

function useDeleteCabins() {
    const queryClient = useQueryClient();

  const {isLoading: isDeleting, mutate: deleteCabin} = useMutation({
    // mutationFn:(id) => deleteCabin(id),
    mutationFn: deleteCabinApi,

    onSuccess:()=>{
      toast.success('cabin successfully deleted')
      queryClient.invalidateQueries({
        queryKey:["cabin"]
      })
    },

   onError: (err) => toast.error(err.message,),
  });
  return{
    isDeleting,deleteCabin
  }
}

export default useDeleteCabins
