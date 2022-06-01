import React from 'react';
import { useState } from 'react';

const Counter = function(){

	const [count, setCount] = useState(0)

	function increment() {
		setCount( count + 1 )  // викликаємо фун-ю setLikes з необх. дією
	  } 
	  function decrement(){
		setCount( count - 1 )
	  }

	return(
		<div>
			<h2>{count}</h2>
			<button onClick={decrement}>Decrement</button>
			<button onClick={increment}>Increment</button>   {/* функції increment/ decrement ми не викликаємо, а передаємо як посилання*/}
			
		</div>
		
	)
}

export default Counter;