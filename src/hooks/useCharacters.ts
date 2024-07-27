import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';

export interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharactersData {
  characters: Character[];
  total: number;
}

const useCharacters = (offset: number) => {
  return useQuery<CharactersData, AxiosError>({
    queryKey: ['characters', offset],
    queryFn: () => fetchCharacters(offset),
    onError: error => {
      console.log('Failed to fetch characters:', error.message);
    },
    staleTime: 12 * 60 * 60 * 1000, // It is unlikely that the information will change in less than 12 hours.
  });
};

const fetchCharacters = async (offset?: number) => {
  const MARVEL_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  try {
    const { data } = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${MARVEL_API_KEY}&offset=${offset}`
    );
    const characters = data?.data.results.map((character: Character) => ({
      id: character.id,
      name: character.name,
      thumbnail: character.thumbnail,
    }));
    return { characters, total: data.data.total };
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Failed to fetch properties: ${axiosError.message}`);
  }
};

export default useCharacters;
