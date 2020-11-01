import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 174px;
  margin-bottom: 30px;
  font-weight: bold;
  > h1 {
    font-size: 21px;
    color: var(--primary);
  }
  @media (max-width: 600px) {
    margin-top: 75px;
  }
`;
