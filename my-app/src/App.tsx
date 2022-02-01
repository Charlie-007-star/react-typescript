import React from 'react';

import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
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
    </React.Fragment> 
  );
}

export default App;