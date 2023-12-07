/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Modal, Box, Typography } from '@mui/material';
import { fetchContact } from '../../redux/contacts/operations'

export const ContactModal = ({ open, onClose, id }) => {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(fetchContact(id))
    }, [])

  return (
    <Modal open={open} onClose={onClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opicity: 0.3 }}>
      <Box sx={{ width: 300, padding: 2, background: 'white', borderRadius: 4 }}>
        <Typography variant="h6">Contact details</Typography>
        <Typography>
            <p>name: </p>
            <p>phone:</p>
            <p>favorite:</p>
            <p>createdAt:</p>
            <p>updatedAt:</p>
        </Typography>
      </Box>
    </Modal>
  );
};
