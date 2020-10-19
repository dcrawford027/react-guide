import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Dustin" age="39" />
        <Person name="Terrasa" age="36" >My Hobbies: Racing</Person>
        <Person name="Sophie" age="11" />
      </div>
    );
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
  }
}

export default App;
