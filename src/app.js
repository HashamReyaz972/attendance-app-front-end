 import React from 'react';
 import ReactDOM from 'react-dom';
 import AppRouter from './routers/AppRouter';
 import TestRouter from './routers/TestRouter';
 import LoginPage from './components/LoginPage'
 import 'normalize.css/normalize.css';
 import './styles/styles.scss';
 import 'reset-css';
 import './styles/base/_base.scss'


ReactDOM.render(<TestRouter />, document.getElementById('app'));
