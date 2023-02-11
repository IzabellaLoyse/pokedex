import styled from 'styled-components';
import { variablesGlobal } from '../../../styles/variables';

export const SrOnlyLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border-width: 0;
  white-space: nowrap;
`;

export const WrapperFilter = styled.div`
  position: relative;

  svg {
    color: ${variablesGlobal.colors.thirdColor};
    position: absolute;
    right: 1.2rem;
    bottom: 0.5rem;
  }
`;

export const InputFilter = styled.input`
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  background-color: ${variablesGlobal.colors.bgButton};
  border: 0;
  width: 100%;
  color: ${variablesGlobal.colors.thirdColor};
  font-size: 1rem;
  height: 2.5rem;

  ::placeholder {
    color: ${variablesGlobal.colors.thirdColor};
  }

  ::-ms-input-placeholder {
    color: ${variablesGlobal.colors.thirdColor};
  }
`;
