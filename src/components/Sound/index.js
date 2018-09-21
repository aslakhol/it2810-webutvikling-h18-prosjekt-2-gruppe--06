import React from 'react';

const Sound = (props) => {
    return (
            <audio className="sound" src={props.soundpath} autoPlay type="audio/wav"></audio>
    );
}

export default Sound;
