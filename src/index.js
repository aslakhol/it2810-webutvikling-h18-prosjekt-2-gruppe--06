import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './utils/registerServiceWorker';

import CardDisplay from './components/cardDisplay';
import Graphic from './components/graphic';

const App = () => {
    return (
        <div>
            <CardDisplay />
            <p>Stuff is here</p>
            <Graphic />
        </div>

    );
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
