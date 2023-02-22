import { ArrowBack } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import PokemonInfo from '../../shared/PokemonInfo/PokemonInfo';
import { transformNumbers } from '../../utils/transformNumbers';
import { pokemonDetails } from '../services/pokemonDetails';
import {
  BaseStats,
  ContainerInfo,
  Measurements,
  PokeAbilities,
  PokeImage,
  WrapperPokeInfo,
} from './style';

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

        <Box mt={2}>
          <WrapperPokeInfo>
            <h4>Habilidades</h4>

            <PokeAbilities>
              {selectedPokemonDetails?.abilities?.map((ability) => (
                <p key={ability.ability?.name}>{ability.ability?.name}</p>
              ))}
            </PokeAbilities>
          </WrapperPokeInfo>
        </Box>

        <Box mt={2}>
          <WrapperPokeInfo>
            <h4>Estatísticas Básicas</h4>

            <BaseStats>
              {selectedPokemonDetails?.stats?.map((stat) => (
                <p key={stat.stat?.name}>
                  {stat.stat?.name}
                  <span>{stat.base_stat}</span>
                </p>
              ))}
            </BaseStats>
          </WrapperPokeInfo>
        </Box>
      </Container>
    </>
  );
};

export default PokemonDetails;
