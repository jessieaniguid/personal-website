import React from 'react';
import ReactPlayer from "react-player";


function GameTrailer(props){

    return(
        <div>
            <ReactPlayer url={props.site} width={920} height={560}></ReactPlayer>
            <br></br>
            <a className='Game-Link' href={props.gameSite} target="_blank">View Game</a>      
            <br></br>      
        </div>
    );
}

export default GameTrailer;