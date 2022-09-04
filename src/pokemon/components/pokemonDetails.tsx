import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPokemonDetails } from '../interfaces/pokemonDetails';
import { pokemonDetails } from '../services/pokemonDetails';

const PokemonDetails: React.FC = () => {
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    IPokemonDetails | undefined
  >(undefined);

  const { name } = useParams();

  useEffect(() => {
    if (!name) return;

    pokemonDetails(name).then((response) =>
      setSelectedPokemonDetails(response),
    );
  }, [name]);

  return (
    <>
      <Container maxWidth="md">
        <Box mt={2}>
          <h1>{name}</h1>
        </Box>
      </Container>
      {/* { <p>{selectedPokemon?.name || 'Nao encontrado'}</p> */}

      {JSON.stringify(selectedPokemonDetails, undefined, 2)}
    </>
  );
};

export default PokemonDetails;
