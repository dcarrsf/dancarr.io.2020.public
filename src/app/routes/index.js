import { Route, Switch } from 'react-router-dom';
import Code from './Code';
import Home from './Home';
import NotFound from './NotFound';
import React from 'react';
import Story from './Story';

export default (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/code">
            <Code />
        </Route>
        <Route path="/story">
            <Story />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
);
