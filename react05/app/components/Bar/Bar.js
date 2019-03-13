import React from 'react';
import PropTypes from 'prop-types';

import './style.less';

class Bar extends React.Component{

    constructor(props){
        super();

        this.state={
            v: props.v
        };

        // 绑定this指向
        this.change=(this.change).bind(this);

        this.setColor=props.setColor;
    }

    change(event){
        this.setState({v:parseInt(event.target.value)});

        this.setColor(this.props.color, this.state.v);
    }

    render(){
        return (
            <div className='Bar'>
                <div className='bar'>
                    {this.props.color} :
                    <input type="range" min={0} max={255} value={this.state.v} onChange={this.change} />
                    <input type="number" min={0} max={255} value={this.state.v} onChange={this.change} />
                </div>
            </div>
        );
    }
}

Bar.propTypes={
    v: PropTypes.number,
    color: PropTypes.string,
    setColor: PropTypes.fun
};

export default Bar;