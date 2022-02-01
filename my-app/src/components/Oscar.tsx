import React from 'react';

/* ------------------------- type of react component ------------------------ */
type OscarProps = {
    children: React.ReactNode;
}

export const Oscar = (props: OscarProps) => {
  return (
    <React.Fragment>
        {props.children}
    </React.Fragment>
  );
};
