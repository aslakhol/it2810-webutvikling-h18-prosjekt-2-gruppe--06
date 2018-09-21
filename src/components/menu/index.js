import React, { Component } from 'react'
import DropDownMenu from '../dropDownMenu'

const Menu = (props) => {
    return (
        <div id="menu">
            <DropDownMenu
                title="Select Group"
                categories={ props.categories.group.categories }
                selected={ props.categories.group.selected }
                toggleItem={ props.toggleSelected }>
            </DropDownMenu>

            <DropDownMenu
                title="Select Sound"
                categories={ props.categories.sound.categories }
                selected={ props.categories.sound.selected }
                toggleItem={ props.toggleSelected }>
            </DropDownMenu>
            
            <DropDownMenu
                title="Select Icon"
                categories={ props.categories.icon.categories }
                selected={ props.categories.icon.selected }
                toggleItem={ props.toggleSelected }>
            </DropDownMenu>
       </div>
    );
}

export default Menu;
