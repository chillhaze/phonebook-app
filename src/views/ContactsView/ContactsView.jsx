import { useState } from 'react';
import Filter from '../../components/Contacts/Filter/Filter';
import ContactsFormModal from '../../components/Contacts/ContactsFormModal/';
import ContactList from '../../components/Contacts/ContactList/ContactList';
// ----------------------------------- MUI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const ContactsView = () => {
  const [showModal, setShowModal] = useState(false);

  const handleMmodalClose = () => {
    setShowModal(false);
  };

  return (
    <CssBaseline>
      {/* <Container> */}
      <Box
        component={Paper}
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p: 3,
          boxShadow: '-1px 5px 18px -4px #050505',
        }}
      >
        {showModal && <ContactsFormModal onClose={handleMmodalClose} />}

        <Button
          onClick={() => setShowModal(true)}
          variant="contained"
          sx={{ pt: 1, pb: 1 }}
        >
          Add new contact
        </Button>
        <Filter />
        {/* 
        <SubTitle>
          Contacts
          <IoMdContacts style={{ marginLeft: '3' }} />
        </SubTitle> */}
        <ContactList />
      </Box>
      {/* </Container> */}
    </CssBaseline>
  );
};

export default ContactsView;
