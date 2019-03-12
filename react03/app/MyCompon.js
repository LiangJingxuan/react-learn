import React from 'react';
import PropTypes from 'prop-types';

class MyCompon extends React.Component{

	constructor(props){
		super();

		console.log(props.id);

		this.state={
			id: props.id
		}
	}

	add(){
		this.setState({id:this.state.id+1});
	}

	render(){

		return (
			<div>
				<p>{this.props.id}</p>
				<p>565965{this.state.id}</p>
				<button onClick={(this.add).bind(this)}>add</button>
			</div>
		)
	}
}

// 定义组件需要传入的参数
MyCompon.propTypes={
	id: PropTypes.string
}

export default MyCompon;
