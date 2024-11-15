import supabase, {supabaseUrl} from "./superbase";


export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin){

  const imageName =`${Math.random()}-${newCabin.image.name}`.replaceAll(
  "/", ""
  );

    const imagePath =`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

const { data, error } = await supabase
  .from('cabins')
  .insert([{
    ...newCabin,
    image: imagePath
  }]);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // uploading image

  const {error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image);

  if(storageError){
   // await supabase.from('cabins').delete().eq('id', data.id)
    console.log(storageError);
    throw new Error("cabin image could not be")
  }
  return data;

}

export async function deleteCabin(id){
  
const { data, error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', id)

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;

}