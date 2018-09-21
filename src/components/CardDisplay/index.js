import React, { Component } from 'react';
import Graphic from '../Graphic';
import Sound from '../Sound';
import TextDisplay from '../TextDisplay';

class CardDisplay extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        if (!this.props.media.text) {
            this.props.initializeState(this.props.id)
        }
    }

    onClick = () =>{
       document.getElementsByClassName("sound")[0].play()
    }

    render() {
        return (
            <div className="card-display">
                <TextDisplay description={this.props.media.text} name={this.props.media.title} />
                <Graphic image={this.props.media.image} />
                <Sound 
                 ref = {instance =>{this.child = instance}}
                 soundpath={this.props.media.soundPath}/>
            </div>
        );
    }
}

export default CardDisplay;
