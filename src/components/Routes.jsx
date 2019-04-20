import React from 'react';
import Route from './Route';

const Routes = ({ routes = [] }) => (
    <div id="routes" style={{ border: '1px solid red' }}>
        {routes.map((route, i) => <Route key={i} route={route} />)}
    </div>
)

export default Routes