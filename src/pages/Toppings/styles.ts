import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Cards = styled.div`
  width: 100%;
  margin-right: 3.7%;
  height: 87.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    margin-right: 0%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 56%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
