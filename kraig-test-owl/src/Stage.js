import React from 'react';
import './Stage.css';


export default function Stage(props){

    return (
        <div className="stage">
        {props.onStage===true && (
<div className="tile"> <span>{props.name}</span> <img src={props.avatar} alt="avatar"></img> </div>

        )
        }</div>
        )
}