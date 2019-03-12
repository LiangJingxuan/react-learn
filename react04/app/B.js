import React from 'react';
import PropTypes from 'prop-types';

import C from './C';

class B extends React.Component{

	constructor(props,context){
		super();

		console.log(context)
	}

	render(){
		return (<C />);
	}
}

B.contextTypes={
	a:PropTypes.number
}

export default B;