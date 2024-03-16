import axios from "axios";

export async function getItems() {
  try {
    const { data } = await axios.get("/api/v1/items");
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
