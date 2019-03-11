import React from 'react';
import MyCompon from './MyCompon';

class App extends React.Component{

	constructor(){
		super();
	}

	render(){
		return (
			<div>
				<MyCompon id='1912'></MyCompon>
			</div>
		);
	}
}

export default App;