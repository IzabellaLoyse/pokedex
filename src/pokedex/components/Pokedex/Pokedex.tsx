import { useEffect, useState } from 'react';

import { IPokemonDetails } from '../../../pokemon/interfaces/pokemonDetails';
import { listPokemons } from '../../../pokemon/services/listPokemons';
import { pokemonDetails } from '../../../pokemon/services/pokemonDetails';
import { IPokemons } from '../../interfaces/pokemons';

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemons | undefined>(
    undefined,
  );
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    IPokemonDetails | undefined
  >(undefined);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  useEffect(() => {
    if (!selectedPokemon) return;

    pokemonDetails(selectedPokemon.name).then((response) =>
      setSelectedPokemonDetails(response),
    );
  }, [selectedPokemon]);

  return (
    <>
      {pokemons?.map((pokemon) => (
        <button type="button" onClick={() => setSelectedPokemon(pokemon)}>
          {pokemon.name}
        </button>
      ))}

      <p>{selectedPokemon?.name || 'Nao encontrado'}</p>
      {JSON.stringify(selectedPokemonDetails, undefined, 2)}
    </>
  );
};

export default Pokedex;
