import React from 'react';
import './MainHeader.css';
import {Link} from 'react-router-dom';
import Resume from './Docs/Programmer_Resume.pdf';

function MainHeader(){
    return(
        <div className='Main-Content'>
            <div className='My-Name'>
                <h1 className='Header-H1'>Jessie Aniguid</h1>
            </div>
            <div className='BG'>
                <div className='Links'>
                    <div className='Link-Child'>
                        <Link to="/About" className='Main-Link'>About</Link>
                        <Link to="/Squish" className='Main-Link'>Squish</Link>
                        <Link to="/Kidgilantes" className='Main-Link'>Kidgilantes</Link>
                        <Link to="/FFF" className='Main-Link'>FFF</Link>
                        <a className='Main-Link' href={Resume} target="_blank">Resume</a> 
                    </div>
                </div>
            </div>



        </div>
    );
}

export default MainHeader;