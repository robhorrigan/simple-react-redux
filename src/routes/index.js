import React from 'react';
import { Route } from 'react-router-dom';

import AppComponent from '../containers/app'
import ExampleComponent from '../containers/example'

const Routes = (store) => (
    <div>
        <Route exact path="/" component={AppComponent} />
        <Route path="/example" component={ExampleComponent} />
    </div>
);

export default Routes;