import { useNavigate } from 'react-router-dom';
import { ICardProps } from '../../interfaces/cardProps';

import Card from '@mui/material/Card';
import { ITypeImages } from '../../interfaces/typeImages';
import { CardImage, CardInfos, CardWrapper, TypeImage } from './style';

const typeImages: ITypeImages | any = {
  grass: '/icons/grass.png',
  poison: '/icons/poison.png',
  fire: '/icons/fire.png',
  water: '/icons/water.png',
  flying: '/icons/flying.png',
  bug: '/icons/bug.png',
  normal: '/icons/pokeball.png',
};

const CardPokemon: React.FC<ICardProps> = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleSelectedPokemon = () => {
    navigate(`/pokemon/${pokemon.name}`, { replace: false });
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
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </CardImage>

        <CardWrapper>
          <CardInfos>
            <h3>{pokemon.name}</h3>

            {pokemon?.types?.map((type) => (
              <div key={type?.type?.name}>
                <div>
                  <TypeImage
                    src={typeImages[type?.type?.name?.split(' ') as any]}
                    alt={`Tipo ${type?.type?.name}`}
                  />
                </div>
              </div>
            ))}
          </CardInfos>

          <div>
            <p>
              Height
              <span> {pokemon?.height}</span>
            </p>

            <p>
              Weight
              <span> {pokemon?.weight}</span>
            </p>
          </div>

          <div></div>
        </CardWrapper>
      </Card>
    </>
  );
};

export default CardPokemon;
