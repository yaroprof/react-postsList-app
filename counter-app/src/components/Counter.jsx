import React from 'react';
import { useState } from 'react';

const Counter = () =>{

	const [count, setCount] = useState(0)

	function increment() {
		setCount( count + 1 )  // викликаємо фун-ю setLikes з необх. дією
	  } 
	  function decrement(){
		setCount( count - 1 )
	  }

	return(
		<div>
			<h2>counter</h2>
			<button onClick={increment}>Increment</button>   {/* функції increment/ decrement ми не викликаємо, а передаємо як посилання*/}
			<button onClick={decrement}>Decrement</button>
		</div>
		
	)
}

export default Counter;