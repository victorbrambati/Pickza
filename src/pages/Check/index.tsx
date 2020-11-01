import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Title from '../../components/Title';
import api from '../../services/api';

import { Container, Wrapper, CardCheck, Price, Line, Content } from './styles';

type LocationStates = {
  crust: number;
  size: number;
  toppings: string[];
};

type SizeData = {
  size: string;
  price: number;
};
type crustData = {
  crust: string;
  price: number;
};

const Check = () => {
  const location = useLocation<LocationStates>();

  const toppingsNames = location.state.toppings;
  const sizeID = location.state.size;
  const crustID = location.state.crust;

  useEffect(() => {
    api.get(`sizes/${sizeID}`).then((response) => {
      setSizeData(response.data);
    });
  }, [sizeID]);
  useEffect(() => {
    api.get(`crusts/${crustID}`).then((response) => {
      setCrustData(response.data);
    });
  }, [crustID]);

  const [sizeData, setSizeData] = useState<SizeData>({ price: 0, size: '' });
  const [crustData, setCrustData] = useState<crustData>({
    price: 0,
    crust: '',
  });

  return (
    <Container>
      <Header showNextButton={-1} />
      <Wrapper>
        <Title>Check your custom pizza</Title>
        <CardCheck>
          <h1>Order details</h1>
          <h2>La Pizza è bella</h2>
          <h3>Order #53434</h3>
          <Content>
            <div>
              <h1>{sizeData?.size}</h1>
              <span>${sizeData?.price}</span>
            </div>
            <div>
              <h1>{crustData?.crust}</h1>
              <span>${crustData?.price}</span>
            </div>
            {toppingsNames?.map((topping) => {
              return (
                <div key={toppingsNames.indexOf(topping)}>
                  <h1>{topping}</h1>
                  <span>
                    {toppingsNames.indexOf(topping) > 2 ? '$0,50' : 'FREE'}
                  </span>
                </div>
              );
            })}
          </Content>
          <Line />
          <Price>
            <h1>Total Price</h1>
            <span>
              $
              {toppingsNames.length > 3
                ? sizeData.price +
                  crustData.price +
                  toppingsNames.length * 0.5 -
                  1.5
                : sizeData.price + crustData.price}
            </span>
          </Price>
        </CardCheck>
      </Wrapper>
    </Container>
  );
};

export default Check;
