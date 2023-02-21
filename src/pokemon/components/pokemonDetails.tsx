import { ArrowBack } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import PokemonInfo from '../../shared/PokemonInfo/PokemonInfo';
import { transformNumbers } from '../../utils/transformNumbers';
import { pokemonDetails } from '../services/pokemonDetails';
import { ContainerInfo, Measurements, PokeImage } from './style';

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

        <ContainerInfo>
          <p>{transformNumbers(selectedPokemonDetails?.id)} </p>

          <Box>
            <PokeImage
              src={selectedPokemonDetails?.sprites?.front_default}
              alt={selectedPokemonDetails?.name}
            />
          </Box>

          <PokemonInfo pokemon={selectedPokemonDetails} />
        </ContainerInfo>

        <Measurements>
          <p>
            Height
            <span> {selectedPokemonDetails?.height}</span>
          </p>

          <p>
            Weight
            <span> {selectedPokemonDetails?.weight}</span>
          </p>
        </Measurements>

        <Box>
          <h4>Habilidades</h4>

          <div>
            {selectedPokemonDetails?.abilities?.map((ability) => (
              <div key={ability.ability?.name}>
                <p>{ability.ability?.name}</p>
              </div>
            ))}
          </div>
        </Box>

        <Box>
          <h4>Estatísticas Básicas</h4>
          <div>
            {selectedPokemonDetails?.stats?.map((stat) => (
              <div key={stat.stat?.name}>
                <p>
                  {stat.stat?.name}
                  <span>{stat.base_stat}</span>
                </p>
              </div>
            ))}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default PokemonDetails;
