import supabase, { supabaseUrl } from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins can't be loaded");
  }

  return data;
};

export const deleteCabin = async (id) => {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted!");
  }
};

export const createEditCabin = async (newCabin, id) => {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imgName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");

  // https://fmklfhkuzaehfqvtrhyd.supabase.co/storage/v1/object/public/cabin-images//cabin-001.jpg
  const imgPath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images//${imgName}`;

  let query = supabase.from("cabins");

  // 1. Create a new Cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imgPath }]);
  }
  // 2. Edit a cabin
  else {
    query = query.update({ ...newCabin, image: imgPath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins can't be created");
  }

  // 2. Upload Image to supabase
  if (hasImagePath) return data; // IF already a image path exists, return data

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imgName, newCabin.image);

  // 3. Delete a Cabin if There is a error uploading a image file
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error("Cabins image could not be uploaded");
  }

  return data;
};
