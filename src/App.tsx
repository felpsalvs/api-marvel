import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import ComicList from "./components/ComicList";

interface Comic {
  id: number;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const App = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchComics = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          "http://gateway.marvel.com/v1/public/comics",
          {
            params: {
              apikey: "676a34a3184dfbcef1093ea17f4113dc",
              orderBy: "title",
              limit: 20,
            },
          }
        );

        setComics(response.data.data.results);
      } catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchComics();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return <ComicList comics={comics} />;
};

export default App;
