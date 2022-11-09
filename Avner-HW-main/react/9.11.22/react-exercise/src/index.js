import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Board from './X_O/Borad';
// import Todos from './Todos/Todos';
import Users from './Api/Users';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      < Users />
   </React.StrictMode>
);


