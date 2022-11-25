import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { TextField, Grid } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Grid container direction="colomn" maxWidth={400}>
      <Grid item xs>
        <p>Find contacts by name</p>
      </Grid>
      <Grid item xs>
        <TextField
          required
          id="outlined-required"
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};
