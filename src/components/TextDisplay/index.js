import React from 'react';

const TextDisplay = (props) => {
    return (
        <div className="textDisplay">
            <h3>{props.name} </h3>
            <p>{props.description}</p>
        </div>
    )
}

export default TextDisplay;
