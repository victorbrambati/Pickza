import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Wrapper, Cards } from './styles';
import CardButtonMultiple from '../../components/CardButtonMultiple';
import Header from '../../components/Header';
import Title from '../../components/Title';
import api from '../../services/api';

export type LocationStateCrust = {
  crust: number;
};
type SizeId = {
  size: number;
};
type Sizes = {
  maxIngredients: number;
};

export type Topping = {
  id: number;
  topping: string;
  imageUrl: string;
};

const Toppings = () => {
  useEffect(() => {
    api.get('Toppings').then((response) => {
      setTopping(response.data);
    });
  }, []);
  const location = useLocation<LocationStateCrust>();
  const locationSize = useLocation<SizeId>();
  const sizeID = locationSize.state.size;

  useEffect(() => {
    api.get(`sizes/${sizeID}`).then((response) => {
      setSizes(response.data);
    });
  }, [sizeID]);

  const [sizes, setSizes] = useState<Sizes>({ maxIngredients: 0 });
  const [topping, setTopping] = useState<Topping[]>();
  const [pickers, setPickers] = useState(['']);

  const maxIngredients = sizes.maxIngredients;

  return (
    <Container>
      <Header
        to="/Check"
        showNextButton={1}
        data={{
          size: sizeID,
          crust: location.state.crust,
          toppings: pickers,
        }}
      />
      <Wrapper>
        <Title>Pick the crust type</Title>
        <Cards>
          <Cards>
            {topping?.map((e) => {
              return (
                <CardButtonMultiple
                  key={e.id}
                  headerProps="Topping"
                  imgSrc={e.imageUrl}
                  nameProps={e.topping}
                  id={e.id}
                  setPickers={setPickers}
                  pickers={pickers}
                  maxIngredients={maxIngredients}
                  addition
                />
              );
            })}
          </Cards>
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Toppings;
