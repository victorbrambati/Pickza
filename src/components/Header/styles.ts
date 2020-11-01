import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 90.02px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  background: linear-gradient(
    42.76deg,
    #794aff 0%,
    #9a4aff 60.57%,
    #9a4aff 100.62%
  );
`;
export const MotorcycleWrapper = styled.div`
  margin-top: 6px;
  width: 53%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 690px) {
    width: 65%;
  }
`;

export const NextPage = styled(Link)`
  padding: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  > h1 {
    color: var(--secondary);
    font-size: 14px;
  }
`;
export const NextWrapper = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 690px) {
    width: 25%;
  }
`;
