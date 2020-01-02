import React from 'react';
import './Stage.css';


export default function Stage(props){
// 
    //let onStage = props.onStage===true;
    return (
        <div className="stage">
<div className="tile">{props.onStage===true ?<p><span>{props.name}</span> <img src={props.avatar} alt="avatar"></img></p>:""} </div>

        </div>
    )
}