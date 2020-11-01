import React, { useState, useEffect } from 'react';

import { Button } from './styles';
import Card, { SelectedProps, CardProps } from '../Card';

type CardButtonProps = CardProps & {
  id: number;
  pickers: string[];
  setPickers: React.Dispatch<React.SetStateAction<string[]>>;
  maxIngredients: number;
};

const CardButtonMultiple = ({
  headerProps,
  nameProps,
  imgSrc,
  setPickers,
  pickers,
  maxIngredients,
}: CardButtonProps & SelectedProps) => {
  const [picker, setPicker] = useState(false);

  useEffect(() => {
    if (picker === true) {
      setPickers([...pickers, nameProps]);
    } else if (picker === false) {
      var index = pickers.indexOf(nameProps);
      pickers.splice(index, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [picker]);
  var index = pickers.indexOf(nameProps);
  return (
    <Button
      onClick={() =>
        picker === false && pickers.length < maxIngredients
          ? setPicker(true)
          : setPicker(false)
      }
    >
      <Card
        headerProps={headerProps}
        imgSrc={imgSrc}
        nameProps={nameProps}
        selected={picker === true ? 'active' : 'inactive'}
        addition={index >= 3 && picker === true ? true : false}
        multiple={index >= 3 && picker === true ? true : false}
      />
    </Button>
  );
};

export default CardButtonMultiple;
