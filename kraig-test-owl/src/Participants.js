import React from 'react';
import './Participants.css';

export default function Participants(props){

     
    // let propsArray= props;
    // let onStage = propsArray.filter(each=>{
    //   return  each.onStage===true
    // })

    return (
<div className="participants">


    <ul className="list">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <li><h3>{props.name}</h3>
       {/* {onStage} */}
       {props.onStage===true && <p><span>on stage  </span><span class="boot">Boot</span></p>}  
    </li>
    </ul>
</div>


    )


}