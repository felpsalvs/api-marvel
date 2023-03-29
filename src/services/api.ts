import axios from "axios";

export async function getComicsData(hero: string, limit: string){
    try{
        let url = `https://gateway.marvel.com/v1/public/comics?ts=1&apikey=${
        import.meta.env.VITE_PUBLIC_KEY
      }&hash=${import.meta.env.VITE_HASH}&limit=${limit}`;
      if (hero) {
        url = url.concat(`&titleStartsWith=${hero}`);
      }
      const {
        data: { data },
      } = await axios.get(url);
      return data;
    }catch(err){
        console.log(err);
    }
}