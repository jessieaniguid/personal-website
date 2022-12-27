import React from 'react';
import ReactPlayer from "react-player";


function GameTrailer(props){

    return(
        <div>
            <ReactPlayer url={props.site}></ReactPlayer>
            <a href={props.gameSite} target="_blank">View Game</a>            
        </div>
    );
}

export default GameTrailer;