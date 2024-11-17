import supabase, {supabaseUrl} from "./superbase";


export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id){

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName =`${Math.random()}-${newCabin.image.name}`.replaceAll(
  "/", ""
  );

    const imagePath =hasImagePath? newCabin.image :`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
        
    //creating/editing a cabin
    let query = supabase.from("cabins");

// A) CREATE
 if (!id) query = query.insert([{
    ...newCabin,
    image: imagePath
  }])

  //B) EDIT CABIN
  if(id) query = query.update({
    ...newCabin,
    image: imagePath
  })
  .eq('id', id)
  .select()

 const {data,error}= await query.select().single();;

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // uploading image

  if(hasImagePath) return data;
  
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