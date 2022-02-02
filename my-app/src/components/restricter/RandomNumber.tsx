import React from 'react';

type RandomNumberProps = {
    value: number;
    isPositive?: boolean;
    isNegative?: boolean;
    isZero?: boolean;
};

export const RandomNumber = ({
    value,
    isPositive,
    isNegative,
    isZero
}: RandomNumberProps) => {
  return (
      <React.Fragment>
          {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {' '}
          {isZero && 'Zero'}
      </React.Fragment>
  )
};
