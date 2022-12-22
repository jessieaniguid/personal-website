import React from 'react';
import './GameBanner.css';
import squish from './images/squish.png';
import kidgilantes from './images/kidgilantes.png';
import fff from './images/fff.png';
import {Link} from 'react-router-dom';


export default function GameBanner(props){
    let pic;
    let bgPic;
    switch(props.gameName){
        case "Squish":
            pic = squish;
            bgPic = "GameBG-squish";
            break;
        case "Kidgilantes":
            pic = kidgilantes;
            bgPic = "GameBG-kidgilantes";
            break;
        case "Flight of the Fire Fairy":
            bgPic = "GameBG-fff";
            pic = fff;
            break;            
    }

    if(props.imageFirst){
        return(
            <div className={bgPic}>
                <div className='Center'>
                    <div className='MainGameBanner'>
                        <div className='BannerContent'>
                            <img src={pic} className="GameImage"></img>
                        </div>
                        <div className='BannerContent'>
                            <div className='GameText'>
                                <h1 className='h1'>{props.gameName}</h1>
                                <h2>{props.gameDescription}</h2>
                                <h3>{props.genre}</h3>
                                <h3>{props.engine}</h3>
                                <h3>{props.platform}</h3>
                                <Link to={props.site}>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }else{
        return(
            <div>
                <h2>bladhjfaldf ad </h2>
                <h1>image after</h1>
            </div>
        );
    }


}