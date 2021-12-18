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

class App extends Component {
  render() {
    return (
      <div className="App">
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