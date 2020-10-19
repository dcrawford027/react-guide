import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ peopleState, setPeopleState ] = useState({
    people: [
      { name: 'Dustin', age: 39 },
      { name: 'Terrasa', age: 36},
      { name: 'Sophie', age: 11 }
    ]
  });

  const [ otherState, setOtherState ] = useState('some other value');

  console.log(peopleState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS!! this.state.people[0].name = "Eric";
    setPeopleState({
      people: [
        { name: 'Eric', age: 39 },
        { name: 'Terrasa', age: 36},
        { name: 'Sophie', age: 12 }
      ],
      otherState: peopleState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} />
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age}  >My Hobbies: Racing</Person>
      <Person name={peopleState.people[2].name} age={peopleState.people[2].age}  />
    </div>
  );
  // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'));
}

export default App;