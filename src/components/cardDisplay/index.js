import React from 'react';
import Graphic from './../graphic'
import Sound from './../sound'

const CardDisplay = (props) => {
    return (
        <div className="card-display">
            <Graphic image={ props.image } />
            <Sound />
        </div>
    );
};

export default CardDisplay; 