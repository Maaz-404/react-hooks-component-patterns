import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Stateless from './Stateless'
import Stateful from './Stateful'
import Container from './Container';
import './style.css';

function App () {

return(

  <>

  <Stateless number={10}/>
  <span> ____________________________________________________ </span>
  <Stateful />
  <span> ____________________________________________________ </span>
  <Container />

  </>

  );
}

render(

   <App />

  , document.getElementById('root'));
