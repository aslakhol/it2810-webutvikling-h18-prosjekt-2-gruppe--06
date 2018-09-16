import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: [{
                label: "hei",
                value: "hallo",
            }],
            listOpen: false,
            title: this.props.title,
        }
    }
     
    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        const selected = this.props.list.selected;
        const items = this.props.list.categories;
        const { toggleItem, title } = this.props;
        const { listOpen } = this.state;
        return (
            <div className="dd-wrapper">
                <div className="dd-header" onClick={() => this.toggleList()}>
                    <div className="dd-header-title">{title}</div>
                    {listOpen
                        ? <FontAwesomeIcon icon="angle-up" size="2x" />
                        : <FontAwesomeIcon icon="angle-down" size="2x" />
                    }
                </div>
                {listOpen && <ul className="dd-list">
                    {items.map((item) => (
                        <li className="dd-list-item" key={item.name} onClick={() => toggleItem(item.id, item.key)}>
                            {item.name}
                            {item.id === selected && <FontAwesomeIcon icon="check" />}
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default DropDownMenu;
