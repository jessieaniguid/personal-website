import React from 'react';
import './DescriptionBanner.css';


function Descriptor(props){
    return(
        <div className='Descriptor'>
            <p>
                {props.message}
            </p>
        </div>
    );
}

export default Descriptor;