import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '@/App';
import Store from '@/store';

const store = createStore(Store)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);