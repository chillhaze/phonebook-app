import * as authSelectors from '../../redux/auth/auth-selectors';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, ...privateRouteProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...privateRouteProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
