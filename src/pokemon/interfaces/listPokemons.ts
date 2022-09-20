import { IPokemonDetails } from './pokemonDetails';

export interface IListPokemons {
  count: number;
  next: null | string;
  previous: null | string;
  results: IPokemonDetails[];
}
