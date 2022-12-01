import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RestrictedRoute = ({
  component: Component,
  redirectedTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectedTo} /> : <Component />;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectedTo: PropTypes.string,
}