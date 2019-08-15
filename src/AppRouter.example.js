import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from 'Pages/Main';
import Pokemon from 'Pages/Pokemon';
import NotFound from 'Pages/NotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/pokemon/:id" component={Pokemon} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
