import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { listPokemons } from '../../../pokemon/services/listPokemons';
import { IPokemons } from '../../interfaces/pokemons';
import Card from '../Card/Card';

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<IPokemons[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemons | undefined>(
    undefined,
  );
  const navigate = useNavigate();

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  const handleSelectedPokemon = (pokemon: IPokemons) => {
    navigate(`/pokemon/${pokemon.name}`, { replace: true });
  };

  return (
    <>
      <Container maxWidth="md">
        <Box>
          <h1>Pokedex</h1>
        </Box>
        <Box mt={2}>
          <h2>Escolha o seu Pokemon</h2>
        </Box>
      </Container>

      <Container maxWidth="md">
        <Box mt={10}>
          <Grid container spacing={2}>
            {pokemons?.map((pokemon) => (
              <>
                <Grid item xs={6} lg={3}>
                  <Card />
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Pokedex;
