import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
// import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
  // <Box component='nav'>
  //  sx={{ display: { sm: 'block' } }}
};
