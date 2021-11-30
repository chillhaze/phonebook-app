import PropTypes from 'prop-types';
import { useEffect } from 'react';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsSelectors from 'redux/contacts/contacts-selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { Container, List } from './ContactList.styled';
// ----------------------------------- MUI
import Typography from '@mui/material/Typography';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(contactsSelectors.getFiltered);
  const contacts = useSelector(contactsSelectors.getAllContacts);

  useEffect(() => {
    //get all contscts
    dispatch(contactsOperations.getAllContacts());
  }, [dispatch]);

  //using filter on contacts list
  const filteredContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filtered.toLowerCase()),
  );

  return (
    <Container>
      {contacts.length === 0 && (
        <Typography component="h4" variant="h4" sx={{ mt: 2, p: 1 }}>
          Phonebook is empty yet
        </Typography>
      )}
      {contacts && filteredContacts && (
        <List>
          {filteredContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
        </List>
      )}
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteBtnPush: PropTypes.func,
};

export default ContactList;
