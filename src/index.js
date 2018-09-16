import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';

import CardDisplay from './components/cardDisplay';

import './style/index.css';
import './style/cardDisplay.css';

const App = () => {
    return (
        <div>
            <CardDisplay />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
