import React from 'react';

type HeadingProps = {
    children: string;
}

export const Heading = (props: HeadingProps) => {
  return (
    <React.Fragment>
        <h1>{props.children}</h1>
    </React.Fragment>
  );
};
