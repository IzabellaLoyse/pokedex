import { ICardProps } from '../../pokedex/interfaces/cardProps';
import { ITypeImages } from '../../pokedex/interfaces/typeImages';
import { CardInfos, PokemonName, TypeImage } from './style';

const typeImages: ITypeImages | any = {
  grass: '/icons/grass.png',
  poison: '/icons/poison.png',
  fire: '/icons/fire.png',
  water: '/icons/water.png',
  flying: '/icons/flying.png',
  bug: '/icons/bug.png',
  normal: '/icons/pokeball.png',
};

const PokemonInfo: React.FC<ICardProps> = ({ pokemon }) => {
  const transformCapitalizeWord = (word: string | undefined) => {
    return word ? word.charAt(0).toUpperCase() + word.slice(1) : '';
  };

  return (
    <CardInfos>
      <PokemonName>{transformCapitalizeWord(pokemon?.name)}</PokemonName>

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
  );
};

export default PokemonInfo;
