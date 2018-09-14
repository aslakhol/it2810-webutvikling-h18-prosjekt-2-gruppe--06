import React, { Component } from 'react'
import DropDownMenu from './dropDownMenu'


export default class Menu extends Component {

    constructor() {
        super()
        this.state = {
            location:{ 
                items :[
                {
                    id: 0,
                    title: 'New York',
                    key: 'location'
                },
                {
                    id: 1,
                    title: 'Dublin',
                    key: 'location'
                },
                {
                    id: 2,
                    title: 'California',
                    key: 'location'
                },
                {
                    id: 3,
                    title: 'Istanbul',
                    key: 'location'
                },
                {
                    id: 4,
                    title: 'Izmir',
                    key: 'location'
                },
                {
                    id: 5,
                    title: 'Oslo',
                    key: 'location'
                },
            ],
            selected: null,
        }

        }
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
                title="Select Location" 
                list={this.state.location}
                toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>

                {/* <DropDownMenu></DropDownMenu>

                <DropDownMenu></DropDownMenu>
 */}            </div>
        );
    }
}
