import React from 'react';
import {
  ContactsList,
  ContactsItem,
  ContactsInfo,
  DeleteBtn,
} from '../styles.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import { selectFilter, selectContacts } from 'redux/contacts/selectors';

export const ListOfContacts = () => {
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  return (
    <ContactsList>
      {visibleContacts.map(item => {
        const { name, number, id } = item;
        return (
          <ContactsItem key={id}>
            <ContactsInfo>
              {name}: {number}
            </ContactsInfo>
            <DeleteBtn
              // value={id}
              onClick={ () => dispatch(deleteContacts(id))}
              type="button"
            >
              Delete
            </DeleteBtn>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};
