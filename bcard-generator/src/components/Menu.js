import React, { Component } from 'react'
import DropDownMenu from './dropDownMenu'


export default class Menu extends Component {

    constructor() {
        super()
        this.state = {
            location: {
                items: [
                    {
                        id: 0,
                        name: 'New York',
                        key: 'location'
                    },
                    {
                        id: 1,
                        name: 'Dublin',
                        key: 'location'
                    },
                    {
                        id: 2,
                        name: 'California',
                        key: 'location'
                    },
                    {
                        id: 3,
                        name: 'Istanbul',
                        key: 'location'
                    },
                    {
                        id: 4,
                        name: 'Izmir',
                        key: 'location'
                    },
                    {
                        id: 5,
                        name: 'Oslo',
                        key: 'location'
                    },
                ],
                selected: null,
            },
        comitee:{
            items: [],
            selected: null,
        }

        }
    }

    componentWillMount() {
        fetch('/text/Comitee.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    comitee: {
                        items: responseJson.map((item) => { return item[1] }),
                        selected: null,

                    }

                })
            })
            .catch((error) => {
                console.error(error);
            });
        console.log(this.state.comitee);
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

                <DropDownMenu
                    title="Select Comitee"
                    list={this.state.comitee}
                    toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>

                {/* <DropDownMenu></DropDownMenu>

                <DropDownMenu></DropDownMenu>
 */}            </div>
        );
    }
}
