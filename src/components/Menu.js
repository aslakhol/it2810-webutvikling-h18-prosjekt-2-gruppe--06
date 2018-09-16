import React, { Component } from 'react'
import DropDownMenu from './dropDownMenu'


export default class Menu extends Component {

    constructor() {
        super()
        this.state = {
            groups:{ 
                items:[
                 {
                    name: "comitee",
                    items: [],
                    id : 0,
                    key : "groups",

                },
                 {
                    name: "subcomitee",
                    items: [],
                    id: 1,
                    key : "groups",
                },
                 {
                    name: "interestgroup",
                    items: [],
                    id: 2,
                    key : "groups",
                },
            ],
                selected: null,   
           
            
        },
        }
    }

    componentWillMount() {
        

        fetch('/text/comitee.json', {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
            const temp = this.state.groups.splice()
            temp[0].items = responseJson.comitee
            temp[1].items = responseJson.subcomitee
            temp[2].items = responseJson.interestgroup
                this.setState({
                   groups: temp, 

                })
            })
            .catch((error) => {
                console.error(error);
            });
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
                    list={this.state.groups}
                    toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>

                <DropDownMenu
                    title="Select Comitee"
                    list={this.state.groups}
                    toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>

                {/* <DropDownMenu></DropDownMenu>

                <DropDownMenu></DropDownMenu>
 */}            </div>
        );
    }
}
