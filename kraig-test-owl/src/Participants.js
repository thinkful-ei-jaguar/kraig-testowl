import React from 'react';


export default function Participants(props){

    return (
<div>
    <ul>
    <li><h3>{props.name}</h3>
    <img src={props.avatar} alt="avatar" />
     {props.inSession===true ? <span>In Session</span>: <span>Logged Out</span>}     
    </li>
    </ul>
</div>


    )


}