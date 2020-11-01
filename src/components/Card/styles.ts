import styled, { css } from 'styled-components';
import { SelectedProps } from './index';

const selectedContainer = {
  active: css`
    background: linear-gradient(
      180deg,
      #794aff 70.52%,
      rgba(154, 74, 255, 0.9375) 91.15%,
      #9a4aff 100%
    );
  `,
  inactive: css`
    background: var(--secondary);
  `,
};

const selectedBlack = {
  active: css`
    color: var(--primary);
  `,
  inactive: css`
    color: var(--tertiary);
  `,
};

const selectedWhite = {
  active: css`
    color: var(--secondary);
  `,
  inactive: css`
    color: var(--primary);
  `,
};

export const Container = styled.div<SelectedProps>`
  ${({ selected }) => css`
    width: 199px;
    height: 204.8px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    ${selected && selectedContainer[selected]};
  `}
`;

export const Type = styled.h1<SelectedProps>`
  ${({ selected }) => css`
    font-size: 12px;
    font-weight: 500;
    margin-left: 21px;
    ${selected && selectedBlack[selected]};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 21px;
  margin-right: 15px;
  height: 27px;
  justify-content: space-between;
`;

export const Props = styled.h2<SelectedProps>`
  ${({ selected }) => css`
    font-size: 12px;
    font-weight: 700;
    ${selected && selectedWhite[selected]};
  `}
`;

export const Cash = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
`;
export const Price = styled.h3<SelectedProps>`
  ${({ selected }) => css`
    font-size: 12px;
    font-weight: 500;
    margin-right: 4px;
    ${selected && selectedBlack[selected]};
  `}
`;
export const Dollar = styled.h4<SelectedProps>`
  ${({ selected }) => css`
    font-size: 12px;
    font-weight: 700;
    ${selected && selectedWhite[selected]};
  `}
`;
export const Img = styled.img`
  width: 199px;
  height: 155.24px;
  border-radius: 24px 24px 0 0;
`;
