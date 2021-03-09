import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../components/pages/home/home.component';
import ViewWorks from '../components/pages/view-works/view-works.component';
import AddWork from '../components/pages/add-work/add-work.component';
import Fallback from '../components/pages/fallback/fallback.component';

export const Routes: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/view-works" component={ViewWorks} />
      <Route exact path="/view-works/:workId" component={ViewWorks} />
      <Route exact path="/add-work" component={AddWork} />
      <Route component={Fallback} />
    </Switch>
  );
};

export default Routes;
