import { Route, Routes } from 'react-router-dom';
import ChoosePokemon from './choosePokemon/components/choosePokemon';

import Pokedex from './pokedex/components/Pokedex/Pokedex';
import PokemonDetails from './pokemon/components/pokemonDetails';

const RoutesApp: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ChoosePokemon />} />
        <Route path="/pokemons" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
