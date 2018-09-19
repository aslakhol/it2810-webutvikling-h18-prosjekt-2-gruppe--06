import React, { Component } from 'react'
import { icon, sound, group } from './../../utils/StateInit';
import Menu from '../Menu';
import CardDisplay from '../cardDisplay';
import { PATH } from './../../utils/constants';
import Cardmenu from '../cardMenu';

class MediaHandler extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: {
                icon: icon,
                sound: sound,
                group: group,
            },
            image: null,
            comiteetext: null,
            soundpath: null,
        };
    }

    toggleSelected(id, key) {
        let temporaryStateOfKey = this.state.categories[key];
        temporaryStateOfKey.selected = id;
        this.setState({
            [key]: temporaryStateOfKey
        })
        this.handleChange(key);
    }

    handleChange(key) {
        switch (key) {
            case "icon":
                this.fetchSVG();
                break;
            case "group":
                this.fetchText();
                break;
            case "sound":
                this.getSound();
                break;

        }
        this.child.deleteStates();
    }

    async fetchSVG() {
        const directory = (() => {
            const selected = this.state.categories.icon.selected;
            return "svg/" + this.state.categories.icon.categories[selected].directory;

        })
        const random = Math.floor(Math.random() * 4);
        const path = PATH + directory() + "/" + random + ".svg";
        return await fetch(path)
            .then(response => response.text())

    };

    async fetchText() {
        const group = (() => {
            const selected = this.state.categories.group.selected;
            return this.state.categories.group.categories[selected].name;
        });
        const path = PATH + 'text/' + group() + ".json";

        return await fetch(path)
            .then(response => response.json())
            .then(responsejson => {
                responsejson[Math.floor((Math.random() * responsejson.length))]
            });
    };

    getSound() {
        const directory = (() => {
            const selected = this.state.categories.sound.selected;
            return this.state.categories.sound.categories[selected].directory;
        })
        const random = Math.floor(Math.random() * 4);
        const path = "/public/" + directory() + "/" + random + ".wav";
        return path;
    }
    
    async initializeStateOfCards() {
        return {
            image: await this.fetchSVG(),
            sound: this.getSound(),
            text: await this.fetchText()
        }
    }

    render() {
        return (
            <div>
                <Menu
                    categories={this.state.categories}
                    toggleSelected={() => this.toggleSelected}
    
                />
                <Cardmenu 
                    initializeState={this.initializeStateOfCards.bind(this)}
                    ref= {instance => {this.child = instance }}
                 />
                {/* <CardDisplay
                    image={this.state.image}
                    comiteeText={this.state.comiteetext ? this.state.comiteetext.info : null}
                    comiteeName={this.state.comiteetext ? this.state.comiteetext.name : null}
                    soundPath={this.state.soundpath}
                /> */}
            </div>
        )
    }
}

export default MediaHandler;