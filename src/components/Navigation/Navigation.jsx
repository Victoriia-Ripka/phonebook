import { NavLink as ReactNav } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useAuth } from 'hooks';
// import { Box } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component="nav">
      <Button to="/" component={ReactNav} sx={{ color: '#fff' }}>
        Home
      </Button>

      {isLoggedIn && (
        <Button to="/contacts" component={ReactNav} sx={{ color: '#fff' }}>
          Contacts
        </Button>
      )}
    </Box>
  );
  //
  //  sx={{ display: { sm: 'block' } }}
};
