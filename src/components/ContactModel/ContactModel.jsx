import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Modal, Box, Typography } from '@mui/material';
import { fetchContact } from '../../redux/contacts/operations'
import { useState } from 'react';

export const ContactModal = ({ open, onClose, id }) => {
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState(null)

  useEffect(() => {
    const fetchContactDetails = async () => {
      if (id) {
        const response = await dispatch(fetchContact(id));
        setSelectedContact(response.payload.data)
      }
    };

    fetchContactDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ width: 300, padding: 2, background: 'white', borderRadius: 4 }}>
        <Typography variant="h6">Contact details</Typography>
        <div>
            <Typography>name: { selectedContact?.name }</Typography>
            <Typography>phone: { selectedContact?.phone }</Typography>
            <Typography>favorite: { selectedContact?.favorite ? 'yes' : 'no' }</Typography>
            <Typography>createdAt: { selectedContact?.createdAt }</Typography>
            <Typography>updatedAt: { selectedContact?.updatedAt }</Typography>
        </div>
      </Box>
    </Modal>
  );
};
