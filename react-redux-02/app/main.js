import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducer';
import App from './App';

let store=createStore(reducer);

render(
    <Provider store={store}>
        <App />
        {console.log(store.getState())}
    </Provider>,
    document.getElementById('app')
);