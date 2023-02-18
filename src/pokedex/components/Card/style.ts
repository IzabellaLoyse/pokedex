import styled from 'styled-components';
import { variablesGlobal } from '../../../styles/variables';

export const CardImage = styled.div`
  align-items: center;
  display: flex;
  flex: 5;
  justify-content: center;
  overflow: hidden;

  img {
    max-height: 100%;
    width: 22rem;
  }
`;

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  padding: 1rem;
`;

export const WrapperMeasurements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  p {
    font-weight: ${variablesGlobal.fontWeight.regular};
    color: ${variablesGlobal.colors.secondColor};

    span {
      font-weight: ${variablesGlobal.fontWeight.bold};
      color: ${variablesGlobal.colors.bgButtonHover};
    }
  }
`;
