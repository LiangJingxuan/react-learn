import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from './actions';
import './style.less';

class App extends React.Component{

    render(){
        return(
            <div>
                <div className='colors' style={{'backgroundColor':`rgb(${this.props.r},${this.props.g},${this.props.b})`}}> </div>
                <p>
                    r: {this.props.r} <br/>
                    g: {this.props.g} <br/>
                    b: {this.props.b} <br/>
                </p>

                <button onClick={this.props.actions.changeG}>修改g值</button>
            </div>
        )
    };
}

export default connect(

    (state)=>{
        return {
            r: state.r,
            g: state.g,
            b: state.b,
        }
    },

    (dispatch)=>{
        return {
            actions: bindActionCreators(actions,dispatch)
        }
    }


)(App);