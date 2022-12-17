import React from 'react';
import './MainHeader.css';
import {Link} from 'react-router-dom';

function MainHeader(){
    return(
        <div >
            <h1>Jessie Aniguid</h1>
            <Link to="/About" className='Main-Link'>About</Link>
            <Link to="/Squish" className='Main-Link'>Squish</Link>
            <Link to="/Kidgilantes" className='Main-Link'>Kidgilantes</Link>
            <Link to="/FFF" className='Main-Link'>FFF</Link>
            <Link to="/Contact" className='Main-Link'>Contact</Link>
        </div>
    );
}

export default MainHeader;