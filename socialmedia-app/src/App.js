 import React, { useState } from "react";

function App() {
  
  const [likes, setLikes] = useState(5)
  const [value, setValue] = useState('text in input')
  console.log(likes);

  function increment() {
    setLikes( likes + 1 )  // викликаємо фун-ю setLikes з необх. дією
  } 
  function decrement(){
    setLikes( likes - 1 )
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type='text' 
        value={value} 
        onChange={event => setValue(event.target.value)}  />
      <button onClick={increment}>Increment</button>   {/* функції increment/ decrement ми не викликаємо, а передаємо як посилання*/}
      <button onClick={decrement}>Decrement</button> 
    </div>
  );
}

export default App;
 