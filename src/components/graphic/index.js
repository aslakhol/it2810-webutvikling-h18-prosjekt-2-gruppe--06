import React from 'react';

const Graphic = (props) => {
    return (
        <div className="graphic" dangerouslySetInnerHTML={{ __html: props.image }}>
        </div>
    )
}

export default Graphic;
