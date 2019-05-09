import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import { Provider } from 'react-redux';
import store from './store/index';

const App = (
  <Provider store = {store}>
    <ToDoList />
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));