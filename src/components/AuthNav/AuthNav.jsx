import { NavLink as ReactNav } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box>
      <Button to="/register" component={ReactNav} sx={{ color: '#fff' }}>
        Register
      </Button>
      <Button to="/login" component={ReactNav} sx={{ color: '#fff' }}>
        Log In
      </Button>
    </Box>
  );
};
