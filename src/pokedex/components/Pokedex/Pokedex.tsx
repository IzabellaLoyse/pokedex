import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery } from 'react-query';

import { listPokemons } from '../../../pokemon/services/listPokemons';
import CardPokemon from '../Card/CardPokemon';

const Pokedex: React.FC = () => {
  const { data, isLoading, isError } = useQuery(`pokemons`, listPokemons);

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
        {!isLoading ? (
          <Box mt={10}>
            <Grid container spacing={2}>
              {data?.results.map((pokemon) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={pokemon.name}>
                  <CardPokemon pokemon={pokemon} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <div>
            <CircularProgress />
          </div>
        )}

        {isError && <div>Erro ao carregar os dados</div>}
      </Container>
    </>
  );
};

export default Pokedex;
