import styled from 'styled-components';

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

export const CardInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const TypeImage = styled.img`
  width: 1.1rem;
`;
