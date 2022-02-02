import React from 'react';

export type ProfileProps = {
    name: string;
}

export const Profile = ({name}: ProfileProps) => {
  return (
    <React.Fragment>
        Private Profile Name is {name}
    </React.Fragment>
  );
};
