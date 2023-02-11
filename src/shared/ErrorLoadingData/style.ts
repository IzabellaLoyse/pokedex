import styled from 'styled-components';
import { variablesGlobal } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;

  p {
    color: ${variablesGlobal.colors.primaryColor};
    font-weight: ${variablesGlobal.fontWeight.medium};
    font-size: 1.2rem;
  }
`;
