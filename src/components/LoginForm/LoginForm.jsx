import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField, Button, Grid } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      logIn({
        email: e.currentTarget.elements[0].value,
        password: e.currentTarget.elements[2].value,
      })
    );
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item xs={6} md={8}>
          <TextField required id="outlined-required" label="Email" type="email" />
        </Grid>
        <Grid item xs={6} md={8}>
          <TextField
            required
            id="outlined-password-input"
            label="Password"
            type="password"
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <Button variant="outlined" type="submit">
            Log in
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
