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

    handleChange(id, key){
        //todo
        return;
    }

    toggleSelected(id, key) {
        let temp = this.state[key]
        temp.selected = [id]
        this.setState({
            [key]: temp
        })
    }

    render() {
        return (
            <div id="menu">
                <DropDownMenu
                    title="Select Group"
                    list={this.state.group}
                    toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>

                <DropDownMenu
                    title="Select Sound"
                    list={this.state.sound}
                    toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>
                
                <DropDownMenu
                    title="Select Icon"
                    list={this.state.icon}
                    toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>
           </div>
        );
    }
}

export default Menu;