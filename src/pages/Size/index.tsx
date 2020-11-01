import React, { useState, useEffect } from 'react';

import { Container, Cards, Wrapper } from './styles';
import CardButton from '../../components/CardButton';
import Title from '../../components/Title';
import Header from '../../components/Header';
import api from '../../services/api';

export type Sizes = {
  id: number;
  size: string;
  price: number;
  imageUrl: string;
  maxIngredients: number;
};

const Size = () => {
  useEffect(() => {
    api.get('sizes').then((response) => {
      setSizes(response.data);
    });
  }, []);
  const [sizes, setSizes] = useState<Sizes[]>();
  const [picker, setPicker] = useState(0);

  return (
    <Container>
      <Header to="/crust" showNextButton={picker} data={{ size: picker }} />
      <Wrapper>
        <Title>Pick the size of the pizza</Title>
        <Cards>
          {sizes?.map((e) => {
            return (
              <CardButton
                key={e.id}
                headerProps="Size"
                imgSrc={e.imageUrl}
                nameProps={e.size}
                price={e.price}
                id={e.id}
                setPicker={setPicker}
                picker={picker}
              />
            );
          })}
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Size;
