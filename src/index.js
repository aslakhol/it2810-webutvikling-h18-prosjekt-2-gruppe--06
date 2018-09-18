import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';


import registerServiceWorker from './utils/registerServiceWorker';
import Cardmenu from './components/Cardmenu';


ReactDOM.render(<Cardmenu />, document.getElementById('root'));
registerServiceWorker();
