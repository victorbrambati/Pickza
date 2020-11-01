import React from 'react';
import Next from '../../styles/Icons/Next';
import Motorcycle from '../../styles/Icons/Motorcycle';
import {
  Container,
  Wrapper,
  NextWrapper,
  MotorcycleWrapper,
  NextPage,
} from './styles';

type HeaderProps = {
  showNextButton: number;
  data?: {
    size?: number;
    crust?: number;
    toppings?: string[];
  };
  to?: string;
};

const Header = ({ showNextButton, data, to }: HeaderProps) => {
  return (
    <Container>
      <Wrapper>
        <MotorcycleWrapper>
          <Motorcycle />
        </MotorcycleWrapper>
        <NextWrapper>
          {showNextButton > 0 && (
            <NextPage to={{ pathname: to, state: data }}>
              <h1>Next</h1>
              <Next />
            </NextPage>
          )}
        </NextWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;
