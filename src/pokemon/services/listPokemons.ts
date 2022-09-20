import axios from 'axios';
import { IListPokemons } from '../interfaces/listPokemons';
import { pokemonDetails } from './pokemonDetails';

export const listPokemons = async (): Promise<IListPokemons> => {
  const urlBase = `${import.meta.env.VITE_API_KEY}`;
  const response = await axios.get<IListPokemons>(urlBase);

  const promiseArray = response.data.results.map(({ name }) =>
    pokemonDetails(name),
  );

  const resultsPromise = await Promise.all(promiseArray);

  return {
    ...response.data,
    results: resultsPromise,
  };
};
