import {
  ButtonChoosePokemon,
  ContainerWrapper,
  ContentImage,
  Title,
} from './style';

const ChoosePokemon: React.FC = () => {
  return (
    <ContainerWrapper>
      <Title>
        <span>Bem vindo a </span>
        Pokedex
      </Title>

      <ContentImage>
        <img src="/images/pokemons.png" alt="Pokémons perto de uma pokebola" />
      </ContentImage>

      <ButtonChoosePokemon href="/pokemons">
        Escolha o seu Pokémon
      </ButtonChoosePokemon>
    </ContainerWrapper>
  );
};

export default ChoosePokemon;
