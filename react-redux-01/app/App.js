import React from 'react';
import {connect} from 'react-redux';

let App= ({v})=>{
  return (
      <div>
          <p>{v}</p>
      </div>
  );
};

export default connect(
    (state)=>{
        return {
            v: state.v
        }
    },
    ()=>{}
)(App);