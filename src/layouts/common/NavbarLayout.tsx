import { NavLink } from 'react-router-dom';
import { UIRoutes } from '../../routes';

export function NavbarLayout() {
  return (
    <div>
      <NavLink to={UIRoutes.home()}>Home</NavLink>
      <NavLink to={UIRoutes.reduxDemo()}>Redux-Demo</NavLink>
    </div>
  );
}
