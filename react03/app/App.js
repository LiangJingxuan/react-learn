import React from 'react';
import MyCompon from './MyCompon';

class App extends React.Component{

	constructor(){
		super();

		this.state={
			d:20
		}
	}

	render(){
		return (
			<div>
				<MyCompon id={21}></MyCompon>
			</div>
		);
	}
}

export default App;