import React from 'react';

type PersonProps = {
    name:{
        first: string;
        last: string;
    }
}

export const Person = (props: PersonProps) => {
  return (
    <React.Fragment>
        <h1>
            Hi I'm {props.name.first} {props.name.last}
        </h1>
    </React.Fragment>
  );
};
