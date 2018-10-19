import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { initializeStore, RootState } from './store';
import {
    BrowserRouter as Router,
} from 'react-router-dom';

const store = initializeStore({} as RootState);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
    ,
    document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
