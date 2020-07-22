import React, { useState } from 'react';

export default function Inputs(props){

  const [name, setName] = useState("Unknown");
    const newName = event => setName(event.target.value);

  const [greeting, setGreeting] = useState('Function Component!');
    const newGreeting = event => setGreeting(event.target.value);

  return (
      <div class="back">
      <h1>1st input</h1>
        <p> name: {name} </p>
        <p>
          Start editing to see some magic happen :)
        </p>
        <input type="text" value={newName}  />
        <button 
         onClick={newName}>
           Set new name
        </button>


        <h1>2nd input</h1>
 
      <input
        type="text"
        value={greeting}
        onChange={newGreeting}
      />
      <span>Change Input to see</span>
      <p>{greeting}</p>

      <h1>3rd input - Stateless Form (props)</h1>

      <p>{}</p>

      <input
        label='email'
        type="text"
        value={props.number}
      />

      </div>

    );
}
