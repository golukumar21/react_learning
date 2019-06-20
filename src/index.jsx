import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App.jsx';
// import PropsEx from './PropsEx.jsx';
import SetState from './SetState.jsx';

// const myEle = <h1>Hell0 React!</h1>

ReactDOM.render(<SetState />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
