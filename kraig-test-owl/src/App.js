import React from 'react';

import './App.css';

import Participants from './Participants';


function App(props) {

  
  return (
    <div className="App">
      {props.store.map(participant=>{
       return <Participants key={participant.id} name={participant.name} id={participant.id} avatar={participant.avatar} inSession={participant.inSession}  onStage={participant.onStage}/>
      })}
     
    </div>
  );
}

export default App;
