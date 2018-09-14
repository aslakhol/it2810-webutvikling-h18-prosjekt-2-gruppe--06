import React, { Component } from 'react'
import DropDownMenu from './dropDownMenu'


export default class Menu extends Component {

    constructor() {
        super()
        this.state = {
            location: [
                {
                    id: 0,
                    title: 'New York',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 1,
                    title: 'Dublin',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 2,
                    title: 'California',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 3,
                    title: 'Istanbul',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 4,
                    title: 'Izmir',
                    selected: false,
                    key: 'location'
                },
                {
                    id: 5,
                    title: 'Oslo',
                    selected: false,
                    key: 'location'
                },
            ],
            randomprop: "hi",
        }
    }

    toggleSelected(id, key) {
        let temp = this.state[key]
        console.log(temp)
        temp[id].selected = !temp[id].selected
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
