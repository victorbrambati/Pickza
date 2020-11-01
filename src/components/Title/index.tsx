import React, { ReactNode } from 'react';

import { Container } from './styles';

export type TitleProps = {
  children?: ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
};

export default Title;
