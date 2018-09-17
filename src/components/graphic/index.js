import React from 'react';

class Graphic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        };
    }

    render () {
        return (
            <div className="graphic" dangerouslySetInnerHTML={{ __html: this.props.image }}>
            </div>
        )
    }
}

export default Graphic;
