import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const ContainerWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${variablesGlobal.colors.primaryColor};
  font-weight: ${variablesGlobal.fontWeight.bold};
  letter-spacing: 2px;

  span {
    color: ${variablesGlobal.colors.secondColor};
    font-size: ${variablesGlobal.fontWeight.medium};
  }
`;

export const ContentImage = styled.div`
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const ButtonChoosePokemon = styled.a`
  background-color: ${variablesGlobal.colors.bgButton};
  color: ${variablesGlobal.colors.thirdColor};
  padding: 1rem;
  width: 16rem;
  height: auto;
  border-radius: 8px;
  text-align: center;
  font-weight: ${variablesGlobal.fontWeight.bold};
  transition: all 200ms ease-out;
  font-size: 1rem;

  &:hover {
    background-color: ${variablesGlobal.colors.bgButtonHover};
  }
`;
