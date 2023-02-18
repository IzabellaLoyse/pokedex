import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import PokemonInfo from '../../../shared/PokemonInfo/PokemonInfo';
import { ICardProps } from '../../interfaces/cardProps';
import { CardImage, CardWrapper, WrapperMeasurements } from './style';

const CardPokemon: React.FC<ICardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleSelectedPokemon = () => {
    navigate(`/pokemon/${pokemon?.name}`, { replace: false });
  };

  return (
    <>
      <Card
        sx={{
          width: 250,
          height: 250,
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '20px',
          backgroundColor: '#343d64',
        }}
        onClick={() => handleSelectedPokemon()}
      >
        <CardImage>
          <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} />
        </CardImage>

        <CardWrapper>
          <PokemonInfo pokemon={pokemon} />
          <WrapperMeasurements>
            <p>
              Height
              <span> {pokemon?.height}</span>
            </p>

            <p>
              Weight
              <span> {pokemon?.weight}</span>
            </p>
          </WrapperMeasurements>
        </CardWrapper>
      </Card>
    </>
  );
};

export default CardPokemon;
