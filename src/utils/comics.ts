import axios from "axios";

export interface Comic {
  id: number;
  title: string;
  lat: number;
  lng: number;
}

export const fetchComics = async (): Promise<Comic[]> => {
  const response = await axios.get("https://gateway.marvel.com/v1/public/comics");
  return response.data;
};
