import React from 'react';

class Graphic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            image: null,
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/svg/arrkomIcon.svg")
        .then(response => response.text())
        .then(svg => this.setState({image: svg}));
    };

    render () {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.image }}>
            </div>
        )
    }
}

export default Graphic;