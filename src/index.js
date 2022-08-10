 import React from 'react';
 import ReactDOM from 'react-dom';
 import Usestate from './hooks/useState.js';
 import UseEffect from './hooks/useEffect.js';
 import UseReducer from './hooks/useReducer.js';
 

 //================================= 
 ReactDOM.render(<Usestate />, document.getElementById('root'));
 ReactDOM.render(<UseEffect />, document.getElementById('root1'));
 ReactDOM.render(<UseReducer />, document.getElementById('root2'));