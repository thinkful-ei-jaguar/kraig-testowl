import React from 'react';
import './Participants.css';

export default function Participants(props){

    return (
<div>
    <ul class="list">
    <img class="avatar" src={props.avatar} alt="avatar" />
    <li><h3>{props.name}</h3>
    
     {props.onStage===true ? <p><span>on stage  </span><span class="boot">Boot</span></p>: <span></span>}     
    </li>
    </ul>
</div>


    )


}