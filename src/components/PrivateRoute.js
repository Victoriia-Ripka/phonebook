import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  component: Component,
  redirectedTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirected = !isLoggedIn && !isRefreshing;
  return shouldRedirected ? <Navigate to={redirectedTo} /> : <Component />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectedTo: PropTypes.string,
}