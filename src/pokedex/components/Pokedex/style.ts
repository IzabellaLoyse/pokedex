import styled from 'styled-components';
import { Title } from '../../../choosePokemon/components/style';
import { variablesGlobal } from '../../../styles/variables';

export const TitleGreeting = styled.p`
  color: ${variablesGlobal.colors.secondColor};
  font-weight: ${variablesGlobal.fontWeight.medium};
  font-size: 1.2rem;
`;

export const MainTitle = styled(Title)`
  font-size: 2rem;
`;

export const ContainerWrapper = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
