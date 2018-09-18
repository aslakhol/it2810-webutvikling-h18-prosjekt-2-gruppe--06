import React, { Component } from 'react';

import Tab from './tab';

class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }


    clickedTab = (tab) => {
        this.setState({ activeTab: tab });
    }


    render() {
        const {
            clickedTab,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="divForTabsAndContent">
                <ol className="tabs">
                    {children.map((child) => {
                        const { label } = child.props;
                        return (
                            <Tab activeTab={activeTab} key={label} label={label} onClick={clickedTab} />
                        )
                    })}
                </ol>
                <div className="content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}

export default Tabs;