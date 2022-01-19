import { Route, Switch } from 'react-router-dom';
import ReduxDemoPage from '../pages/ReduxDemoPage';
import { UIRoutes } from '../routes';

export default function PrivateLayout() {
  return (
    <Switch>
      <Route path={UIRoutes.reduxDemo()} exact component={ReduxDemoPage} />
    </Switch>
  );
}
