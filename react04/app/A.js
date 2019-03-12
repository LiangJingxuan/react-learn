import React from 'react';
import PropTypes from 'prop-types';

import B from './B';

class A extends React.Component{

	constructor(){
		super();

		this.state={
			a: 2024
		}
	}

	addA(){
		this.setState({a: this.state.a+1})
	}

	render(){
		return (<B />);
	}

	// 设置子内容上下文
	getChildContext(){
		return {
			a: this.state.a,
			addA: (this.addA).bind(this)
		}
	}
}

A.childContextTypes={
	a:PropTypes.number.isRequired,
	addA: PropTypes.func.isRequired
}

export default A;