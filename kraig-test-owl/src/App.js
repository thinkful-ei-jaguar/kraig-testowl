import React from 'react';

import './App.css';

import Participants from './Participants';

import Stage from './Stage';
//import participants from './store';

function App(props) {

  
  return (
    <div className="App">
      <div>
      {props.store.map(participant=>{
       return <Participants key={participant.id} name={participant.name} id={participant.id} avatar={participant.avatar} inSession={participant.inSession}  onStage={participant.onStage}/>
      })} </div>
     <div className="stage">
       {props.store.map(participant=>{
         return <Stage key={participant.id} avatar={participant.avatar} name={participant.name} onStage={participant.onStage}/>
       })} </div>
    </div>
  );
}

export default App;
