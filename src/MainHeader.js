import React from 'react';
import './MainHeader.css';


function MainHeader(){
    return(
        <div>
            <h1>Jessie Aniguid</h1>
            <a href="/About" className='Main-Link'>About</a>
            <a href="/Squish" className='Main-Link'>Squish</a>
            <a href="/Kidgilantes" className='Main-Link'>Kidgilantes</a>
            <a href="/FFF" className='Main-Link'>FFF</a>
            <a href="/Contact" className='Main-Link'>Contact</a>
        </div>
    );
}

export default MainHeader;