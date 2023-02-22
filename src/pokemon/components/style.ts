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

export const WrapperPokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h4 {
    color: ${variablesGlobal.colors.secondColor};
    font-weight: ${variablesGlobal.fontWeight.bold};
  }
`;

export const PokeAbilities = styled(WrapperMeasurements)`
  p {
    color: ${variablesGlobal.colors.bgButtonHover};
    font-weight: ${variablesGlobal.fontWeight.bold};
  }
`;

export const BaseStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p {
    display: inline-flex;
    gap: 0.5rem;
    font-weight: ${variablesGlobal.fontWeight.regular};
    color: ${variablesGlobal.colors.secondColor};

    span {
      font-weight: ${variablesGlobal.fontWeight.bold};
      color: ${variablesGlobal.colors.bgButtonHover};
    }
  }
`;
