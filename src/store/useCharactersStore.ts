import { mountStoreDevtool } from 'simple-zustand-devtools';
import { createStore } from './createStore';

export interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface CharactersState {
  characters: Character[];
}

const initialState: CharactersState = { characters: [] };

export const useCharacterStore = createStore<CharactersState>(
  initialState,
  'charactersStore'
);

export function setCharacterStates(characters: Character[]) {
  useCharacterStore.setState({ characters });
}

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('characterStore', useCharacterStore);
}
