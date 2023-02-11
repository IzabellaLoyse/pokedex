import { ArrowBack } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { listPokemons } from '../../../pokemon/services/listPokemons';
import ErrorLoadingData from '../../../shared/ErrorLoadingData/ErrorLoadingData';
import Loading from '../../../shared/Loading/Loading';
import { currentHour } from '../../../utils/currentHour';
import CardPokemon from '../Card/CardPokemon';
import Filter from '../Filter/Filter';
import { ContainerWrapper, MainTitle, TitleGreeting } from './style';

const Pokedex: React.FC = () => {
  const { data, isLoading, isError } = useQuery(`pokemons`, listPokemons);
  const [search, setSearch] = useState('');

  const filteredCards =
    search.length > 0
      ? data?.results.filter((item) => {
          const itemName = item.name;
          return itemName?.includes(search);
        })
      : [];

  return (
    <>
      <Container maxWidth="md">
        <Box mt={2}>
          <IconButton aria-label="back">
            <Link to="/">
              <ArrowBack />
            </Link>
          </IconButton>
        </Box>

        <Box mt={1} ml={2}>
          <TitleGreeting>{currentHour()}</TitleGreeting>

          <ContainerWrapper>
            <MainTitle>Pokedex</MainTitle>
            <Filter filter={search} setFilter={setSearch} />
          </ContainerWrapper>
        </Box>
      </Container>

      <Container maxWidth="md">
        {!isLoading ? (
          <Box mt={10}>
            <Grid container spacing={2}>
              {search.length > 0 ? (
                <>
                  {filteredCards?.map((pokemon) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={pokemon.name}>
                      <CardPokemon pokemon={pokemon} />
                    </Grid>
                  ))}
                </>
              ) : (
                <>
                  {data?.results.map((pokemon) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={pokemon.name}>
                      <CardPokemon pokemon={pokemon} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Box>
        ) : (
          <Loading />
        )}

        {isError && <ErrorLoadingData />}
      </Container>
    </>
  );
};

export default Pokedex;
