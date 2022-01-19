import { Redirect, Route, Switch } from 'react-router-dom';
import { UIRoutes } from '../routes';
import { NavbarLayout } from './common';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';

export default function AppLayout() {
  return (
    <>
      <NavbarLayout />
      <Switch>
        <Redirect exact from="/" to={UIRoutes.home()} />
        <Route path="/(home|404)" component={PublicLayout} />
        <Route path="/(redux-demo)" component={PrivateLayout} />
        <Route path="*" render={() => <Redirect to={UIRoutes.notFound()} />} />
      </Switch>
    </>
  );
}
