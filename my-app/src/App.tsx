import React from 'react';

import './App.css';
import { Greet } from './components/Greet';
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
      <Status status='loading' />
    </React.Fragment>
  );
}

export default App;