import { Route, Redirect } from 'react-router-dom';
import * as authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  restricted = false,
  redirectTo,
  children,
  ...publicRouteProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...publicRouteProps}>
      {shouldRedirect ? <Redirect exact to={redirectTo} /> : children}
    </Route>
  );
}
