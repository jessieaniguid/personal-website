import React from 'react';
import squish from './images/squish.png';
import './WorkContent.css'

export default function WorkContent(props){
    
    return(
        <div className='WC-Total'>
            <div className='WC-Title'>
                <h2>{props.Title}</h2>
            </div>

            <div className='WC-Images-Container'>
                <div className='WC-Images'>
                    {props.Images}
                </div>
            </div>


            <div className='WC-Text-Container'>
                <p className='WC-Text'>{props.Text}</p>
            </div>
        </div>
    )
}