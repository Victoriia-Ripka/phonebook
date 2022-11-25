import React from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/contacts/operations';
import { TextField, Button, Grid } from '@mui/material';
import { selectContacts } from 'redux/contacts/selectors';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export const MyContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements[0].value;
    const number = e.currentTarget.elements[2].value;
    const newContact = { id: nanoid(), name, number };
    const isContactInList = contacts.find(
      item =>
        item.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
    );
    if (isContactInList) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContacts(newContact));
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} validationSchema={SignupSchema}>
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
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
          {/* <ErrorMessage name="name" /> */}
        </Grid>
        <Grid item xs>
          <TextField
            required
            id="outlined-required"
            label="Number"
            type="tel"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          {/* <ErrorMessage name="number" /> */}
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
