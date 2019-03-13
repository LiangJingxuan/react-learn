import React from 'react';
import Bar from './components/Bar/Bar';
import './App.less'

class App extends React.Component{

	constructor(){
		super();

		this.state={
			r: 0,
			g: 0,
			b: 0
		};

		this.setColor=(this.setColor).bind(this);

		this.bars=['r','g','b'].map((v,i)=>{
			return <Bar key={i} color={v} v={this.state[v]} setColor={this.setColor} />
		});
	}

	setColor(color,value){
		this.setState({[color]:value});
	}

	render(){
		return (
			<div>
				<div className='box' style={{'backgroundColor': `rgb(${this.state.r},${this.state.g},${this.state.b})`}} />
				{this.bars}
			</div>
		);
	}
}

export default App;