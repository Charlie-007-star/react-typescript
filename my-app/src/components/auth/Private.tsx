import React from 'react';
import { Login } from './Login';
import {ProfileProps} from './Profile';

type PrivateProps = {
    isLoggedIn: boolean;
    // passing component through props
    component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, component: Component}: PrivateProps) => {
  return (
    <React.Fragment>
        {isLoggedIn ? <Component name="Sujin" /> : <Login />}

    </React.Fragment>
  );
};
