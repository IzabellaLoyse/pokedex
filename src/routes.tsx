import { Route, Routes } from 'react-router-dom';
import Pokedex from './pokedex/components/Pokedex/Pokedex';
import PokemonDetails from './pokemon/components/pokemonDetails';

const RoutesApp: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
