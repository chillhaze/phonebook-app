import { useEffect } from 'react';
import {
  Overlay,
  // FormWrapper
} from './ContactsFormModal.styled';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FaPlus } from 'react-icons/fa';
// ----------------------------------- MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const ContactsFormModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = uuidv4();
  const numberInputId = uuidv4();
  //getting form value to state
  const handleFormChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    // Adding listener
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Removing listener
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleOnSubmit = e => {
    e.preventDefault();
    //Creating new contact
    dispatch(contactsOperations.createContact({ name, number }));
    //Updating contacts list with added new contact
    dispatch(contactsOperations.getAllContacts());
    //Reseting form
    formReset();
    //Closing modal
    onClose();
  };
  //Reset form fn
  const formReset = () => {
    setName('');
    setNumber('');
  };

  // Close modal on Esc btn push
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  // Close modal on backdrop click
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      {/* <FormWrapper> */}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component={Paper}
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            mb: 15,
            boxShadow: '-1px 5px 18px -4px #050505',
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            // sx={{
            //   color: 'black',
            // }}
          >
            Add new contact
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleOnSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={4}>
              <Grid
                item
                xs={12}
                // sm={6}
              >
                <TextField
                  required
                  fullWidth
                  autoFocus
                  autoComplete="given-name"
                  placeholder="Mark Zuckerberg"
                  label="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleFormChange}
                  id={nameInputId}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoComplete="number"
                  placeholder="xxx-xx-xx"
                  label="Number"
                  type="number"
                  name="number"
                  value={number}
                  onChange={handleFormChange}
                  id={numberInputId}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: 1.5 }}
            >
              <FaPlus style={{ marginRight: '7px' }} />
            </Button>
          </Box>
        </Box>
      </Container>
      {/* </FormWrapper> */}
    </Overlay>
  );
};

export default ContactsFormModal;
