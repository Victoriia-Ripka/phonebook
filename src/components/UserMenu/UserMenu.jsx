import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Box, Grid } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{width: 300}}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <p>Welcome, {user.name}</p>
        <Button
          variant="outlined"
          sx={{ color: 'white', borderColor: 'white', p: 1 }}
          onClick={() => dispatch(logOut(user))}
        >
          Logout
        </Button>
      </Grid>
    </Box>
  );
};
