import React from 'react';

const Sound = (props) => {
    return (  
        <div className="sound">
            <audio src={props.soundpath} autoPlay type="audio/wav"></audio>
        </div>
    );
}
 
export default Sound;