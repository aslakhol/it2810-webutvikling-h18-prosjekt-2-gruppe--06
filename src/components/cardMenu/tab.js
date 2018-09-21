import React, { Component } from 'react';

class Tab extends Component {
    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const { activeTab, label } = this.props;
        let className = "list-item";

        if (activeTab === label) {
            className += " active-tab";
        }

        return (
            <li className={className} onClick={this.onClick}>
                {label}
            </li>
        );
    }
}

export default Tab;
