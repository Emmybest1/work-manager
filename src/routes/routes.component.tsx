import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {routes} from '../db/routes.json';

console.log(routes);
export const Routes: React.FC = (): JSX.Element => {
  return (
    <Switch>
     {routes}
    </Switch>
  );
};

export default Routes;
