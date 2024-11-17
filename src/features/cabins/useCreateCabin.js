import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useCreateCabin() {

  const queryClient = useQueryClient();

  const {mutate: createCabin, isLoading: isCreating} = useMutation({
    mutationFn: (newCabinData)=>createEditCabin(newCabinData),
    onSuccess: ()=>{
      toast.success(" cabin successfully created")
      queryClient.invalidateQueries({queryKey:["cabin"]})
    },
    onError:(err) =>toast.error(err.message)
    
  })
    return {isCreating,createCabin}
}

export default useCreateCabin
