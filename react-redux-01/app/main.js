import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import App from './App';


let store = createStore(reducer);

render(
    <Provider store={store}>
        {console.log(store.getState())}
        <App/>
    </Provider>
    ,
    document.getElementById('app-id')
);