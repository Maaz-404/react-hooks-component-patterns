import React from "react";
import React, {useState} from "react";

  const Stateful = () =>     {

    const [greeting, setGreeting] = useState('Function Component!');
    const newGreeting = event => setGreeting(event.target.value);

    return (

     <>

        <h1>Stateful</h1>
 <p>Two ways to get inputs from more than one fields:
1-Use separate functions for each input event. <br/>
2-Use One input event function to get input values of all fields in one place i.e state .<br/>
3- Submit values from input fields
</p>

      <input
        type="text"
        value={greeting}
        onChange={newGreeting}
      />
      <span>Change Input to see</span>
      <p>{greeting}</p>


    </>
    
  )

}

export default Stateful;