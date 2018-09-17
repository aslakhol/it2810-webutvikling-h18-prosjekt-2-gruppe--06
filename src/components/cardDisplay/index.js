import React from 'react';
import Graphic from './../graphic'
import Sound from './../sound'

const CardDisplay = () => {
    return (
        <div className="card-display">
            <Graphic />
            <Sound />
            <TextDisplay />
        </div>
    );
};

export default CardDisplay; 