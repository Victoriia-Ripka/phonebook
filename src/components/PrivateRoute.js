import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectedTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirected = isLoggedIn && isRefreshing;
  // console.log(isLoggedIn, " = is loggedIn, ", isRefreshing, " = isRefreshing")
  // console.log(shouldRedirected, " should redirected to login")
  return shouldRedirected ? <Navigate to={redirectedTo} /> : <Component />;
};
