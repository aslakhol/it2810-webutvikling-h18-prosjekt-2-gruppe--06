import React, { Component } from 'react'
import { icon, sound, group } from '../../utils/initialState';
import Menu from '../menu';
import { PATH } from './../../utils/constants';
import CardMenu from '../cardMenu'

class MediaHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: {
                icon: icon,
                sound: sound, // these are objects defined in utils/initstate.js
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
        this.handleChange();
    }

    async handleChange() {
        await this.child.deleteStates(); // null all the states
        this.child.initializeState(); // initialize the state of selected tab
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
                return responsejson[Math.floor((Math.random() * responsejson.length))]
            });
    };

    getSound() {
        const directory = (() => {
            const selected = this.state.categories.sound.selected;
            return this.state.categories.sound.categories[selected].directory;
        })
        const random = Math.floor(Math.random() * 4);
        const path = "/sound/" + directory() + "/" + random + ".wav";
        return path;
    }

    async initializeStateOfCards() {
        const textObject = await this.fetchText()

        return await {
            image: await this.fetchSVG(),
            sound: this.getSound(),
            text: textObject.info,
            title: textObject.name,
        }
    }

    render() {
        return (
            <div>
                <Menu
                    categories={this.state.categories}
                    toggleSelected={this.toggleSelected.bind(this)}
                />
                <CardMenu
                    initializeState={this.initializeStateOfCards.bind(this)}
                    ref={instance => { this.child = instance }}
                />
            </div>
        )
    }
}

export default MediaHandler;
