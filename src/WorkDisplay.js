import React from 'react';
import WorkContent from './WorkContent';
import ReactPlayer from 'react-player';
import './WorkDisplay.css';

class WorkDisplay extends React.Component{

    constructor(props){
        super(props);
        this.MainTitle = props.MainTitle;
        this.MainMedia = props.MainMedia;
        this.VideoLink = props.VideoLink;
        this.Text = props.Text;
        this.Contents= props.Contents;
    }

    render(){
        return(
            <div>
                <h1 className='Title'>{this.MainTitle}</h1>
                <div className='Video'>
                    {
                        this.VideoLink && <ReactPlayer url={this.VideoLink}  width={920} height={560}/>
                    }
                </div>

                <div className='Media'>
                    {
                        this.MainMedia
                    }
                </div>
                
                <div className='Work-Display-Text-Container'>
                    <p className='Work-Display-Text'>{this.Text}</p>
                </div>

                <div>
                    {this.Contents}
                </div>

            </div>
        );
    }
}

export default WorkDisplay;