import React from 'react';

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>,id: number) => void;
}

export const Button = (props:  ButtonProps) => {
  return (
      <React.Fragment>
          <button onClick={event => props.handleClick(event,1)}>Click</button>
          <br /> 
      </React.Fragment>
  );
};
 