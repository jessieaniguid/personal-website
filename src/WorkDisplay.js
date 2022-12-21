import React from 'react';
import WorkContent from './WorkContent';
import ReactPlayer from 'react-player';

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
                <h1>{this.MainTitle}</h1>
                {
                    this.VideoLink && <ReactPlayer url={this.VideoLink}/>
                }

                {
                    this.MainMedia
                }
                
                <p>{this.Text}</p>
                {this.Contents}
            </div>
        );
    }
}

export default WorkDisplay;