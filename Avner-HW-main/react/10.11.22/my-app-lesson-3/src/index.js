import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Board from './X_O/Borad';
import Todos from './Todos/Todos';
// import Users from './Api/Users';
import ComponentPropTypes from './E_X/prop_types_ex';
import Main from './E_X/children_prop_ex';
import MoviesContextProvider from './Context/Context';
import Movies from './Context/Movies';
import Counter from './Counter/Counter';
import ApiContextProvider from './NewApi/ApiContext';
import NewApi from './NewApi/NewApi';
import NewContext from './NewContext/NewContext';
import BackgroundColor from './NewContext/BackgroundColor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  


//  <NewContext>
//    <BackgroundColor/>
// </NewContext> 
  



   <ApiContextProvider>
      <NewApi/>
   </ApiContextProvider>
     // <Counter/>
   // <MoviesContextProvider>
   //    <Movies />
   // </MoviesContextProvider>
   // <React.StrictMode>
   // < Users name="david" />
   // <Main />
   // <ComponentPropTypes age={5} name="Avi" arrayNumbers={["2", 3, 3, 6]} />
   // </React.StrictMode>
);


