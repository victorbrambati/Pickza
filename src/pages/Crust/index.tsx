import React, { useEffect, useState } from 'react';
import { Container, Wrapper, Cards } from './styles';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';
import CardButton from '../../components/CardButton';
import api from '../../services/api';

export type LocationStateSize = {
  size: number;
};

export type Crusts = {
  id: number;
  crust: string;
  price: number;
  imageUrl: string;
};

const Crust = () => {
  const location = useLocation<LocationStateSize>();
  const [crusts, setCrusts] = useState<Crusts[]>();

  useEffect(() => {
    api.get('crusts').then((response) => {
      setCrusts(response.data);
    });
  }, []);

  const [picker, setPicker] = useState(0);

  return (
    <Container>
      <Header
        to="/toppings"
        showNextButton={picker}
        data={{ size: location.state.size, crust: picker }}
      />
      <Wrapper>
        <Title>Pick the crust type</Title>
        <Cards>
          {crusts?.map((e) => {
            return (
              <CardButton
                key={e.id}
                headerProps="Crust"
                imgSrc={e.imageUrl}
                nameProps={e.crust}
                price={e.price}
                id={e.id}
                setPicker={setPicker}
                picker={picker}
                addition
              />
            );
          })}
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Crust;
