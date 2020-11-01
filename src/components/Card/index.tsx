import React from 'react';

import {
  Container,
  Wrapper,
  Type,
  Props,
  Price,
  Dollar,
  Cash,
  Img,
} from './styles';

export type SelectedProps = {
  selected?: 'active' | 'inactive';
};

export type CardProps = {
  headerProps: string;
  nameProps: string;
  price?: number;
  imgSrc: string;
  addition?: boolean;
  multiple?: boolean;
};

const Card = ({
  headerProps,
  selected,
  nameProps,
  price,
  imgSrc,
  addition,
  multiple,
}: CardProps & SelectedProps) => {
  return (
    <Container selected={selected}>
      <Img src={imgSrc} />
      <Type selected={selected}>{headerProps}</Type>
      <Wrapper>
        <Props selected={selected}>{nameProps}</Props>
        <Cash>
          <Price selected={selected}>{price && 'Price'}</Price>
          <Price selected={selected}>{multiple && 'Price'}</Price>
          <Dollar selected={selected}>
            {addition && '+'}
            {price && '$'}
            {price}
            {multiple && '$0.50'}
          </Dollar>
        </Cash>
      </Wrapper>
    </Container>
  );
};

export default Card;
