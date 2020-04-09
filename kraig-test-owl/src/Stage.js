import React from 'react';
import './Stage.css';


export default function Stage(props){

    return (
<>
        {props.onStage===true && (
<div className="tile"> <span>{props.name}</span> <img className="stage-avatar" src={props.avatar} alt="avatar"></img> </div>

        )}
</>
        )
}