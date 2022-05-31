import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AvailableRasp from '../pages/AvailableRasp';
import RaspConfigured from '../pages/RaspConfigured';
import Overview from '../pages/Overview';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/overview" component={ Overview } />
            <Route path="/rasp" component={ AvailableRasp } />
            <Route path="/sync-raspberry" component={ RaspConfigured } />
            <Route path="/not-found" component={ NotFound } />
            <Redirect from="/" to="/rasp" />
        </Switch>
    )
}

export default Routes;
