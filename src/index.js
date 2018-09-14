import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import registerServiceWorker from './utils/registerServiceWorker';

const App = () => {
    return (
        <div>hello from app</div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
