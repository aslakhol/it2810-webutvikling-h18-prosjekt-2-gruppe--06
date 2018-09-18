import React from 'react';
import Graphic from './../graphic';
import Sound from './../sound';

const CardDisplay = (props) => {
    return (
        <div className="card-display">
            <p>{ props.comiteetext }</p>
            <Graphic image={ props.image } />
            <Sound soundpath={ props.soundpath } />
        </div>
    );
};

export default CardDisplay; 