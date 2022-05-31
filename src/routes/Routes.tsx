import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import Repository from '../pages/Repository';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/repository" component={ Repository } />
            <Route path="/favorites" component={ Favorites } />
            <Redirect from="/" to="/repository" />
        </Switch>
    )
}

export default Routes;
