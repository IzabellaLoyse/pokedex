import { Container } from './style';

const ErrorLoadingData: React.FC = () => {
  return (
    <>
      <Container>
        <p>Erro ao carregar os Pokémons...</p>

        <img src="/images/charizard.png" alt="Imagem do Pokemon Charizard" />
        <p>O Charizard está furioso com esse erro</p>
      </Container>
    </>
  );
};

export default ErrorLoadingData;
