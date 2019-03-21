import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './actions';

class App extends React.Component{

    constructor(props){
        super();

        this.count = (this.count).bind(this);
    }

    count(){
        let num=Number(this.refs.num.value);
        this.props.actions.ADDNUM(num);
    }

    render(){
        return (
            <div>
                <p>{this.props.v}</p>
                <button onClick={this.props.actions.ADD}>加</button>
                {' '}
                <button onClick={this.props.actions.DIV}>减</button>

                <p>
                    <input type="number" ref="num" />
                    <button onClick={this.count}>加数</button>
                </p>
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return {
            v: state.v
        }
    },
    (dispatch)=>{
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }
)(App);