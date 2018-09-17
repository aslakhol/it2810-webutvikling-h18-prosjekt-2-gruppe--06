import React, { Component } from 'react'
import DropDownMenu from './dropDownMenu'
import {icon, sound, group} from './../utils/StateInit';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            group: group,       
            sound: sound,
            icon: icon,
        }
    }

    handleChange(id, key) {
        //todo
        return;
    }

    toggleSelected(id, key) {
        let temporaryStateOfKey = this.state[key]
        temporaryStateOfKey.selected = id
        this.setState({
            [key]: temporaryStateOfKey
        })
    }

    render() {
        return (
            <div id="menu">
                <DropDownMenu
                    title="Select Group"
                    categories={ this.state.group.categories }
                    selected={ this.state.group.selected }
                    toggleItem={ this.toggleSelected.bind(this) }>
                </DropDownMenu>

                <DropDownMenu
                    title="Select Sound"
                    categories={ this.state.sound.categories }
                    selected={ this.state.sound.selected }
                    toggleItem={ this.toggleSelected.bind(this) }>
                </DropDownMenu>
                
                <DropDownMenu
                    title="Select Icon"
                    categories={ this.state.icon.categories }
                    selected={ this.state.icon.selected }
                    toggleItem={ this.toggleSelected.bind(this) }>
                </DropDownMenu>
           </div>
        );
    }
}

export default Menu;
