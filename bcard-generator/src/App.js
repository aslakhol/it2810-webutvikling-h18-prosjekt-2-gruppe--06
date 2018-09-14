import React, { Component } from 'react';
import './style/App.css';
import Menu from './components/Menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp, faAngleDown, faCheck);

class App extends Component {
  render() {
    return (
    <Menu></Menu>);
  }
}

export default App;
