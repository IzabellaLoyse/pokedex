import axios from 'axios';
import { IListPokemons } from '../interfaces/listPokemons';

export const listPokemons = async (): Promise<IListPokemons> => {
  const urlBase = `${import.meta.env.VITE_API_KEY}`;
  const response = await axios.get<IListPokemons>(urlBase);

  return response.data;
};
