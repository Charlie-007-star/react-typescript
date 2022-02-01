import React from 'react';

type GreetProps = {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {

  const { messageCount = 0 } = props;

  return (
    <React.Fragment>
        <h1>
           {
               props.isLoggedIn?  `Hello ${props.name}, you have ${messageCount} messages`: `Not logged In` 
           }
        </h1>
    </React.Fragment>
  );
};
