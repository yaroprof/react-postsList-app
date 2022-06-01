 import React, { useState } from "react";

function App() {

  
  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('text in input')



  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type='text' 
        value={value} 
        onChange={event => setValue(event.target.value)}  />

    </div>
  );
}

export default App;
 