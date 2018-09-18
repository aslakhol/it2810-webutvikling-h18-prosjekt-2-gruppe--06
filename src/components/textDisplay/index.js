import React from 'react';

const TextDisplay = (props) => {
    return (
        <div className="textDisplay">
            <p>{ props.name } </p>
            <p>{ props.description }</p>
        </div>
    )
}

export default TextDisplay;
