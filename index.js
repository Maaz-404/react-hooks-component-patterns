import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Inputs from './Inputs'

import './style.css';

function App () {

return(
  
  <Inputs number={10}/>
  
  );
}

render(

   <App />

  , document.getElementById('root'));
