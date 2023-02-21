import styled from 'styled-components';
import { WrapperMeasurements } from '../../pokedex/components/Card/style';
import { variablesGlobal } from '../../styles/variables';

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.1rem;
    color: ${variablesGlobal.colors.secondColor};
    font-weight: ${variablesGlobal.fontWeight.bold};
  }
`;

export const PokeImage = styled.img`
  width: 12rem;
  height: auto;
`;

export const Measurements = styled(WrapperMeasurements)`
  justify-content: center;
`;
