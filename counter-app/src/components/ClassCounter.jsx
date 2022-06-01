import React from 'react';

class ClassCounter extends React.Component {

	// відмінності з функціональним компонентом: 
	// render, constructor, 
	constructor(props){
		super(props);
		this.state = {
			count: 0, 
		}
		// 01- об'єднання контексту функцій increment/ decrement з конт. - this
		//this.increment = this.increment.bind(this)
		//this.decrement = this.decrement.bind(this)
	}

	// змінювати напряму state неможливо; використ. - setState
	// function не використовуємо, оголошуємо ч-з назви функцій
	// використ. this через те, що знаход. всередині class

// 02 - краще робити через arrow function, тоді контекст this бачить setState
	increment = () => {
		this.setState({count: this.state.count + 1})
	} 
	decrement =() => {
		this.setState({count: this.state.count - 1})
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.decrement}>Decrement
				</button>
				<button onClick={this.increment}>Increment
				</button> 
			</div>
		);
	}
}

export default ClassCounter;