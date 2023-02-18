import { ArrowBack } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import PokemonInfo from '../../shared/PokemonInfo/PokemonInfo';
import { transformNumbers } from '../../utils/transformNumbers';
import { pokemonDetails } from '../services/pokemonDetails';

const PokemonDetails: React.FC = () => {
  const { name } = useParams();

  const { data: selectedPokemonDetails } = useQuery(
    `pokemonDetails-${name}`,
    () => pokemonDetails(name),
  );

  return (
    <>
      <Container maxWidth="md">
        <Box mt={2}>
          <IconButton aria-label="back">
            <Link to="/pokemons">
              <ArrowBack />
            </Link>
          </IconButton>
        </Box>

        <Typography>{transformNumbers(selectedPokemonDetails?.id)} </Typography>

        <Box mt={2}>
          <img src={selectedPokemonDetails?.sprites?.front_default} alt="" />
        </Box>

        <PokemonInfo pokemon={selectedPokemonDetails} />
      </Container>
    </>
  );
};

export default PokemonDetails;
