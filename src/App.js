import React, { Component } from 'react'
import './App.css';

//Components

// import Racing from './Racing';
// import Basketball from './Basketball';
// import Cover from './Cover';
// import Login from './Login';
// import Forum from './Forum';
import Personal from './Personal';
import Cheatsheet from './Cheatsheet';
import Article from './Article';

const driver = {
  name: 'Lewis Hamiliton',
  team: 'Mercedes',
}

const payload = [
  {
    name: 'Driver 2',
    team: 'Team 2'
  },
  {
    name: 'Driver 3',
    team: 'Team 3'
  },
  {
    name: 'Driver 4',
    team: 'Team 4'
  },
  {
    name: 'Driver 5',
    team: 'Team 5'
  },
]

const displayDrivers = payload.map((driver, idx) => {
  return (
    <div key={idx}>
      <h1>Name: {driver.name}</h1>
      <p>Team: {driver.team}</p>
    </div>
  );
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Driver {driver.name}</h1>
        <p>Team {driver.team}</p>
        <div>

        </div>
        <Personal 
        title="I'm Mekel"
        subtitle="A Creative and Full Stack Developer"
        message="Welcome to my portfolio"/>
        <Cheatsheet />
        <Article />
      </div>
    )
  }
}

export default App; // ES6 syntax for exporting 

//functional component -> made out of a function 
//class component -> is made out of a class 