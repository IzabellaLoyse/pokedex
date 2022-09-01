import { IPokemons } from '../../pokedex/interfaces/pokemons';

export interface IListPokemons {
  count: number;
  next: null | string;
  previous: null | string;
  results: IPokemons[];
}
