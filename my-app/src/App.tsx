import React from 'react';

import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { RandomNumber } from './components/restricter/RandomNumber';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Status } from './components/Status';

function App() {

  const personName = {
    first: 'Sujin',
    last: 'S R',
  };

  const list = [
    {
      first: 'Sree',
      last: 'Kumaran',
    },
    {
      first: 'Rani',
      last: 'S',
    },
    {
      first: 'Suji',
      last: 'S R',
    }
  ]

  return (
    <React.Fragment>
      <Greet name="Sujin" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={list} />
      <Status status='success' />
      <Heading>Placeholder text from App</Heading>
      <Oscar>
        <Heading>Oscar goes to Robert Downey.Jr</Heading>
      </Oscar>
      <Greet name="Sujin"  isLoggedIn={false} />
      <Button handleClick={(event,id)=>{
        console.log('Button clicked',event,id);
      }} /> 
      <Input value='' handleChange={(event)=> console.log("changed",event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
      <User />
      <Counter />
      <DomRef />
      <MutableRef />
      <Private isLoggedIn={true} component={Profile} />
      <br />
      {/* <List 
        items={['Batman', 'Superman', 'Spiderman']}
        onClick={(item)=> console.log(item)}
      />
       <List 
        items={[1,2,3]}
        onClick={(item)=> console.log(item)}
      />
      <List
        items={[
          {
            id:1,
            first:"sujith",
            last:"S R"
          },
          {
            id:2,
            first:"sujin",
            last:"S R"
          },
          {
            id:3,
            first:"suji",
            last:"S R"
          }
        ]}
        onClick={(item)=> console.log(item)}
      /> */}
      <RandomNumber value={10} isPositive isNegative isZero  /> 
    </React.Fragment> 
  );
}

export default App;