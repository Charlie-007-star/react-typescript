import React from 'react';

type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <React.Fragment>
        <h1>
           {
               props.isLoggedIn?  `Hello ${props.name}, you have ${props.messageCount} messages`: `Not logged In` 
           }
        </h1>
    </React.Fragment>
  );
};
