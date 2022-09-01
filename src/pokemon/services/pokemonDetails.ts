import axios from 'axios';

import { IPokemonDetails } from '../interfaces/pokemonDetails';

export const pokemonDetails = async (
  name: string,
): Promise<IPokemonDetails> => {
  const urlBase = `${import.meta.env.VITE_API_KEY}/${name}`;
  const response = await axios.get<IPokemonDetails>(urlBase);

  return response.data;
};
