import React from 'react';
import Graphic from './../graphic';
import Sound from './../sound';
import TextDisplay from '../textDisplay';

const CardDisplay = (props) => {
    return (
        <div className="card-display">
            <TextDisplay description={ props.comiteeText } name={ props.comiteeName }/>
            <Graphic image={ props.image } />
            <Sound soundpath={ props.soundPath } />
        </div>
    );
};

export default CardDisplay;


