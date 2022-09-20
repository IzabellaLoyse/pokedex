import { Route, Routes } from 'react-router-dom';
import Favorites from './favorites/Favorites/Favorites';
import Pokedex from './pokedex/components/Pokedex/Pokedex';
import PokemonDetails from './pokemon/components/pokemonDetails';

const RoutesApp: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
