import React, { Component } from 'react'
import DropDownMenu from '../dropDownMenu'

class Menu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="menu">
                <DropDownMenu
                    title="Select Group"
                    categories={ this.props.categories.group.categories }
                    selected={ this.props.categories.group.selected }
                    toggleItem={ this.props.toggleSelected }>
                </DropDownMenu>

                <DropDownMenu
                    title="Select Sound"
                    categories={ this.props.categories.sound.categories }
                    selected={ this.props.categories.sound.selected }
                    toggleItem={ this.props.toggleSelected }>
                </DropDownMenu>
                
                <DropDownMenu
                    title="Select Icon"
                    categories={ this.props.categories.icon.categories }
                    selected={ this.props.categories.icon.selected }
                    toggleItem={ this.props.toggleSelected }>
                </DropDownMenu>
           </div>
        );
    }
}

export default Menu;
