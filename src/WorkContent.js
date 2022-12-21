import React from 'react';
import squish from './images/squish.png';


export default function WorkContent(props){
    
    return(
        <div>
            <hr></hr>
            <h2>{props.Title}</h2>
            <div>
                {props.Images}
            </div>
            <p>{props.Text}</p>
        </div>
    )
}