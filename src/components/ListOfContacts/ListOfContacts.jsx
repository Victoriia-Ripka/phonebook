import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import { Button, List, ListItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ListOfContacts = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(item => {
        const { name, number, id } = item;
        return (
          <ListItem key={id}>
            <p>
              {name}: {number}
            </p>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>dispatch(deleteContacts)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};
