import React from 'react';

import { Button } from './styles';
import Card, { SelectedProps, CardProps } from '../Card';

type CardButtonProps = CardProps & {
  id: number;
  setPicker: React.Dispatch<React.SetStateAction<number>>;
  picker: number;
};

const CardButton = ({
  headerProps,
  nameProps,
  price,
  imgSrc,
  addition,
  setPicker,
  picker,
  id,
}: CardButtonProps & SelectedProps) => {
  return (
    <Button onClick={() => (picker !== id ? setPicker(id) : setPicker(0))}>
      <Card
        headerProps={headerProps}
        imgSrc={imgSrc}
        nameProps={nameProps}
        price={price}
        selected={picker === id ? 'active' : 'inactive'}
        addition={addition}
      />
    </Button>
  );
};

export default CardButton;
