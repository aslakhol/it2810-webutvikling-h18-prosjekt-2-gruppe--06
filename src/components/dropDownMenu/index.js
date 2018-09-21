import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
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
        const { toggleItem, title, categories, selected } = this.props;
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
                    {categories.map((item) => (
                        <li className="dd-list-item" key={item.name} onClick={() => toggleItem(item.id, item.key)}>
                            {item.name}
                            {item.id === selected && <FontAwesomeIcon className="check" icon="check" />}
                        </li>
                    ))}
                </ul>}
            </div>
        )
    }
}

export default DropDownMenu;
