import React from 'react';
import {Switch, Route} from 'react-router-dom';

export const Routes: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" render={() => <div>Testing</div>} />
    </Switch>
  );
};

export default Routes;
