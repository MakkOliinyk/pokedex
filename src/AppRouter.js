import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from 'pages/Main';
import Pokemon from 'pages/Pokemon';
import NotFound from 'pages/NotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/pokemon/:name" component={Pokemon} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
