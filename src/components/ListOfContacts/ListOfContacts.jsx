import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts, updateFavorite } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';
import { Button, List, ListItem, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast'
import { ContactModal } from '../ContactModel/ContactModel'

export const ListOfContacts = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);;
  const dispatch = useDispatch();
  const [selectedContactId, setSelectedContactId] = useState(null);

  const visibleContacts = Array.isArray(contacts) ? contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  ) : [];

  const deleteContact = (id) => {
    dispatch(deleteContacts(id))
    toast.success('Successfully deleted!', {
      duration: 4000,
      position: 'top-center',
    });
  }

  const updateContactFavorite = id => {
    dispatch(updateFavorite(id))
    toast.success('Successfully upated!', {
      duration: 4000,
      position: 'top-center',
    });
  }
  
  const handleOpenModal = (id) => {
    setSelectedContactId(id);
  };

  const handleCloseModal = () => {
    setSelectedContactId(null);
  };

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        {visibleContacts.map(item => {
          const { name, phone, _id, favorite } = item;
          return (
            <ListItem key={_id} sx={{ paddingLeft: 0, paddingRight: 0 }}>
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
                        <span>{phone}</span>
                      </Grid>
                    </Grid>
                </Grid>
                <Button variant="contained" onClick={() => handleOpenModal(_id)} >
                  See details
                </Button>
                <Grid item xs="auto">
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => updateContactFavorite({contactsId: _id, favorite})}
                  >
                    {favorite ? "delete from fav" : "add to fav"}
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteContact(_id)}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
      {selectedContactId && <ContactModal open={true} onClose={handleCloseModal} id={selectedContactId}/>}
      </>
  );
};
