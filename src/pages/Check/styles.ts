import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 56%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardCheck = styled.div`
  width: 340px;
  height: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--secondary);
  @media (max-width: 600px) {
    width: 280px;
  }
  > h1 {
    margin-top: 6px;
    margin-left: 15px;
    font-weight: bold;
    font-size: 15px;
    letter-spacing: 0.047px;
    line-height: 20px;
  }
  > h2 {
    margin-left: 15px;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  > h3 {
    margin-left: 15px;
    color: #9e9e9e;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    line-height: 16px;
    margin-bottom: 17px;
  }
`;

export const Price = styled.div`
  background-color: var(--gray-1);
  width: 100%;
  height: 43px;
  border-radius: 0px 0px 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    margin-left: 15px;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
  }
  > span {
    margin-right: 22px;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 85%;
  height: 60%;

  flex-direction: column;
  margin-left: 15px;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    > h1 {
      margin-top: 4px;
      font-weight: normal;
      font-size: 11px;
      line-height: 14px;
    }
    > span {
      font-weight: 500;
      font-size: 11px;
      line-height: 14px;
    }
  }
`;

export const Line = styled.div`
  background: #e6e8ee;
  height: 1px;
  width: 100%;
`;
