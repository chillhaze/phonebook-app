import PropTypes from 'prop-types';
import * as contactsOperations from '../../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import { ListItem, Name, Number, BtnDelete } from './ContactItem.styled';
// ----------------------------------- Icons
import { TiDelete } from 'react-icons/ti';
import { IoIosContact } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
// ----------------------------------- MUI
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    //contacts to delete id
    dispatch(contactsOperations.deleteContact(id));
    //get updated contacts
    dispatch(contactsOperations.getAllContacts());
    return;
  };

  return (
    <ListItem>
      <Box
        component={Paper}
        // variant="outlined"
        sx={{
          m: 1,
          p: 1,
          boxShadow: '1px 3px 10px -4px #050505',
          pt: 1,
          pb: 1,
          borderRadius: '4px',
          color: '#478d95',
        }}
      >
        <Name>
          <IoIosContact style={{ paddingTop: '2', marginRight: '5' }} />
          {name}:
        </Name>

        <Number>
          <AiFillPhone style={{ paddingTop: '2', marginRight: '5' }} />
          {number}
        </Number>
        <BtnDelete type="button" onClick={handleDeleteContact}>
          <TiDelete style={{ width: '25', height: '25' }} />
        </BtnDelete>
      </Box>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteBtnPush: PropTypes.func,
};
