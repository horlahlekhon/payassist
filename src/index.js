import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

////REDUX
import {Provider} from 'react-redux'
import store from './store'




ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
