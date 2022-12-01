import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { TextField, Button, Grid } from '@mui/material';
import { selectContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';

export const MyContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements[0].value;
    const number = e.currentTarget.elements[2].value;
    const newContact = { id: nanoid(), name, number };

    if (name.length > 1 && name.length < 51) {
      if (number.length > 8 && number.length < 21) {
        const isContactInList = contacts.find(
          item =>
            item.name.toLocaleLowerCase() ===
            newContact.name.toLocaleLowerCase()
        );

        if (isContactInList) {
          toast.error(`${newContact.name} is already in contacts`, {
            duration: 4000,
            position: 'top-center',
          });
        } else {
          toast.success('Successfully created!', {
            duration: 4000,
            position: 'top-center',
          });
          dispatch(addContacts(newContact));
          e.currentTarget.reset();
        }
      } else {
        toast.error(`Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`, {
          duration: 4000,
          position: 'top-center',
        });
      }
    } else {
      toast.error(`Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`, {
        duration: 4000,
        position: 'top-center',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs>
          <TextField
            required
            id="outlined-required"
            label="Name"
            type="text"
            inputProps={{
              pattern:
                "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            }}
          />
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="outlined-number-required"
            label="Number"
            type="tel"
            inputProps={{
              pattern:
                '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
            }}
          />
        </Grid>
        <Grid item xs="auto">
          <Button variant="outlined" type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
