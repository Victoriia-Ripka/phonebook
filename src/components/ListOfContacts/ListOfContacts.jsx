import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import { Button, List, ListItem, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ListOfContacts = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      {visibleContacts.map(item => {
        const { name, number, id } = item;
        return (
          <ListItem key={id} sx={{ paddingLeft: 0, paddingRight: 0 }}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs="auto">
                <Grid container justifyContent="space-between">
                  <Grid item xs="auto">
                    <span>{name}:</span>
                  </Grid>
                  <Grid item xs="auto">
                    <span>{number}</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs="auto">
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => dispatch(deleteContacts(id))}
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
};
