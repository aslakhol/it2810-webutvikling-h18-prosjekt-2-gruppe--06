import React, { Component } from 'react'
import DropDownMenu from './dropDownMenu'
import {icon,sound,group} from './../utils/StateInit';


export default class Menu extends Component {

    constructor() {
        super()
        this.state = {
            group:group,       
            sound:sound,
            icon:icon
        
        }
    }

    componentDidMount() {
        

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
                    title="Select icon"
                    list={this.state.icon}
                    toggleItem={this.toggleSelected.bind(this)}>
                </DropDownMenu>

                {/* <DropDownMenu></DropDownMenu>

                <DropDownMenu></DropDownMenu>
 */}            </div>
        );
    }
}
