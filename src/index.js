import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import './assets/scss/style.scss';
import "@mdi/font/css/materialdesignicons.min.css"
import { store } from './redux';
import { Provider } from 'react-redux';
import { MainLayout } from './layout/main.layout';

ReactDOM.render(  <Provider store={store}> <MainLayout/> </Provider>, document.getElementById('root'));

