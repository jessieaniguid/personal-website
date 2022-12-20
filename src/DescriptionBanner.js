import React from 'react';
import './DescriptionBanner.css';


function Descriptor(props){
    return(
        <div className='Descriptor'>
            <div className='Descriptor-Text'>
                <p className='Descriptor-Ends'>
                    {props.message}
                </p>
            </div>
        </div>
    );
}

export default Descriptor;