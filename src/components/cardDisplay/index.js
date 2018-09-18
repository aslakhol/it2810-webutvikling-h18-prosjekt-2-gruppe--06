import React from 'react';
import Graphic from './../graphic'
import Sound from './../sound'

const CardDisplay = (props) => {
    return (
        <div className="card-display">
            <TextDisplay text={props.comiteetext} />
            <Graphic image={ props.image } />
            <Sound soundpath={props.soundpath} />
        </div>
    );
};

export default CardDisplay; 