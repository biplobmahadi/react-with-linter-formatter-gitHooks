import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import { UIRoutes } from '../routes';

export default function PublicLayout() {
  return (
    <Switch>
      <Route path={UIRoutes.home()} exact component={HomePage} />
      <Route path={UIRoutes.notFound()} exact component={NotFoundPage} />
    </Switch>
  );
}
