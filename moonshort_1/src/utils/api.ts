import axios from "axios";

export type returnType = {
  id: number;
  name: string;
  check: boolean;
  userId: number;
};
export async function getItems(): Promise<returnType[] | undefined> {
  try {
    const { data } = await axios.get<returnType[]>("/api/v1/items");

    return data;
  } catch (error: unknown) {
    console.error(error);
  }
}
