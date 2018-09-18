import React from 'react';
import Graphic from './../graphic'
import Sound from './../sound'

const CardDisplay = (props) => {
    return (
        <div className="card-display">
            <Graphic image={ props.image } />
            <Sound soundpath={props.soundpath} />
            <p>{ props.comiteetext }</p>
        </div>
    );
};

export default CardDisplay; 