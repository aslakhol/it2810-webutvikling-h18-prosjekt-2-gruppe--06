import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/Dropdown.css';
import registerServiceWorker from './utils/registerServiceWorker';
import Menu from './components/Menu';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp, faAngleDown, faCheck);

import CardDisplay from './components/cardDisplay';

import './style/index.css';
import './style/cardDisplay.css';

const App = () => {
    return (
        <div>
            <Menu />
            <CardDisplay />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
