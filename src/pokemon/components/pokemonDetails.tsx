import { ArrowBack, Favorite } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { transformNumbers } from '../../utils/transformNumbers';
import { pokemonDetails } from '../services/pokemonDetails';

const PokemonDetails: React.FC = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const { data: selectedPokemonDetails } = useQuery(
    `pokemonDetails-${name}`,
    () => pokemonDetails(name),
  );

  const [value, setValue] = useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Container maxWidth="md">
        <Box mt={2}>
          <IconButton aria-label="back">
            <Link to="/">
              <ArrowBack />
            </Link>
          </IconButton>

          <IconButton
            aria-label="favorites"
            onClick={() => navigate(`/favorites`, { replace: false })}
          >
            <Favorite color="secondary" />
          </IconButton>
        </Box>

        <Typography>{transformNumbers(selectedPokemonDetails?.id)} </Typography>

        <Box mt={2}>
          <img src={selectedPokemonDetails?.sprites?.front_default} alt="" />
        </Box>

        <Typography variant="h4">{selectedPokemonDetails?.name}</Typography>

        <Box display="flex" flexDirection="row" gap="2rem">
          {selectedPokemonDetails?.types?.map((type) => (
            <Typography key={type.type?.name}>{type.type?.name}</Typography>
          ))}
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="one" label="Sobre" />
              <Tab value="two" label="Estatísticas" />
              <Tab value="three" label="Movimentos" />
              <Tab value="four" label="Evoluções" />
            </Tabs>
          </Box>
        </Box>

        <Box mt={2}>
          {selectedPokemonDetails?.species?.name}
          {selectedPokemonDetails?.height}
          {selectedPokemonDetails?.weight}

          <Typography variant="h6" component="h2">
            Habilidades
            {selectedPokemonDetails?.abilities?.map((ability) => (
              <Typography key={ability.ability?.name}>
                {ability.ability?.name}
              </Typography>
            ))}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default PokemonDetails;
