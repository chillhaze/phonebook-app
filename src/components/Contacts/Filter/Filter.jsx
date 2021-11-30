import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltered } from 'redux/contacts/contacts-selectors';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { Wrapper } from './Filter.styled';
// ----------------------------------- MUI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const filtered = useSelector(getFiltered);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 1,
          }}
        >
          <Typography component="h2" variant="h5">
            Search by name
          </Typography>

          <TextField
            fullWidth
            placeholder="Mark Zuckerberg"
            label="Name"
            type="text"
            value={filtered}
            onChange={e => dispatch(changeFilter(e.currentTarget.value))}
            size="small"
          />
        </Box>
      </Container>
    </Wrapper>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
