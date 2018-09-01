import * as React from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import Home from '../containers/Home';
import About from '../containers/About';

export default (
    <Switch>
        <Route exact={true} path="/" component={Home}/>
        <Route exact={true} path="/about" component={About}/>
    </Switch>
);
