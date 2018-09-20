import React from 'react';

const Sound = (props) => {
    return (  
        <div className="sound">
            <audio src={ props.soundpath } autoPlay type="audio/wav"></audio>
            {console.log(props.soundpath)}
        </div>
    );
}
 
export default Sound;