import React from 'react';

class App extends React.Component{

	constructor(){
		super();

		this.state={
			a: 20,
			b: 12,
			c: 24
		}
	}

	add(){
		this.setState(
			{a:this.state.a+1}
		);
	}

	render(){
		return (
			<div>
				<p>{this.state.a}</p>
				<p>{this.state.b}</p>
				<p>{this.state.c}</p>

				<p>
					<button onClick={(this.add).bind(this)}>++++</button>
				</p>

			</div>
		);
	}
}

export default App;