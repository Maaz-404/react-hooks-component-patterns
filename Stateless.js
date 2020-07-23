import React, { useState } from 'react';

export default function Stateless(props){

  const [greeting, setGreeting] = useState('Function Component!');
    const newGreeting = event => setGreeting(event.target.value);

  return (
      <div class="back">

      <h1> Stateless - Read Only (uses props)</h1>

      <input
        type="text"
        value={props.number}
      />

      <p>{props.number}</p>



      </div>

    );
}
