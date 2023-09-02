import supabase from "./supabase";

export async function getPackingList() {
  const { data, error } = await supabase.from("packing").select("*");

  if (error) {
    console.log(error);
    throw new Error("packing list cannot be loaded");
  }
  return data;
}
