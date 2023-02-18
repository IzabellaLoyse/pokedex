import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const CardInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const PokemonName = styled.h3`
  color: ${variablesGlobal.colors.secondColor};
  font-size: 1.1rem;
  font-weight: ${variablesGlobal.fontWeight.bold};
`;

export const TypeImage = styled.img`
  width: 1.1rem;
`;
