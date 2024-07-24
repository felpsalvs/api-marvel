import axios, { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { Character } from '../store/useCharactersStore';

const MARVEL_API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

const useCharacters = () => {
  return useQuery<Character[] | undefined, AxiosError>({
    queryKey: 'characters',
    queryFn: fetchCharacters,
    onError: error => {
      console.log('Failed to fetch characters:', error.message);
    },
   staleTime: 12 * 60 * 60 * 1000, // It is unlikely that the information will change in less than 12 hours.
  });
};

const fetchCharacters = async () => {
  try {
    const { data } = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?apikey=${MARVEL_API_KEY}`
    );
    const characters = data.data.results.map((character: Character) => ({
      id: character.id,
      name: character.name,
      thumbnail: character.thumbnail,
    }));
    return characters;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw new Error(`Failed to fetch properties: ${axiosError.message}`);
  }
};

export default useCharacters;
