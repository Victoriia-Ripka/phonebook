import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  redirectedTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirected = !isLoggedIn && !isRefreshing;
  return shouldRedirected ? <Navigate to={redirectedTo} /> : <Component />;
};
