import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import TodoListApp from './container/TodoListApp';
import WeatherApp from './container/WeatherApp';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>
);

