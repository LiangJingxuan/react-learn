import React from 'react';
import PropTypes from 'prop-types';

class C extends React.Component{

	constructor(props,context){
		super();

		console.log(context)
	}

	render(){
		return (
			<div>
				<p>{this.context.a}</p>
				<button onClick={this.context.addA}>++</button>
			</div>
		);
	}
}

C.contextTypes={
	a:PropTypes.number,
	addA: PropTypes.func.isRequired
}

export default C;