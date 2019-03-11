import React from 'react';

class MyCompon extends React.Component{

	constructor(props){
		super();

		console.log(props.id)
	}

	render(){

		return (
			<div>
				<p>565965{this.props.id}</p>
			</div>
		)
	}
}

export default MyCompon;
