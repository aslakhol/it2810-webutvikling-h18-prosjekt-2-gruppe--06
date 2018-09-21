import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

import './style/index.css';
import './style/dropDown.css';
import './style/cardDisplay.css';
import './style/cardMenu.css';

import registerServiceWorker from './utils/registerServiceWorker';
import MediaHandler from './components/MediaHandler';

library.add(faAngleUp, faAngleDown, faCheck);
const App = () => {
    return (
        <div>
            <MediaHandler />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
