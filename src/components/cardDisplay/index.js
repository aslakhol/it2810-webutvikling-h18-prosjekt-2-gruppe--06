import React, {Component} from 'react';
import Graphic from './../graphic';
import Sound from './../sound';
import TextDisplay from '../textDisplay';

class CardDisplay extends Component {

    constructor(props) {
        super(props)

    }
    
    componentWillMount(){
       if(!this.props.media.comiteeText){
            this.props.initializeState(this.props.id)
       } 
       console.log(this.props);

    }    

    render() {
        return (
            <div className="card-display">
                <TextDisplay description={this.props.media.text} name={this.props.media.text} />
                <Graphic image={this.props.media.image} />
                <Sound soundpath={this.props.media.soundPath} />
            </div>
        );
    }

}


export default CardDisplay; 