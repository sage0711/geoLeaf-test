import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from 'src/hooks/use-responsive';

export default function SelectOptionButton(props) {
  const lgUp = useResponsive('up', 'lg');

  const { option1, option2 } = props;

  return (
    <Container sx={{display:'flex', padding:'0 !important', justifyContent: !lgUp && 'center'}}>
      <IconButton
        sx={{
          width: 100,
          height: 40,
          color: '#fff',
          bgcolor: '#2DA7E6',
          borderTopLeftRadius: 60,
          borderBottomLeftRadius: 60,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      >
        <Typography variant="subtitle2" noWrap>
          {option1}
        </Typography>
      </IconButton>
      <IconButton
        sx={{
          width: 100,
          height: 40,
          color: '#fff',
          bgcolor: '#333333',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 60,
          borderBottomRightRadius: 60,
        }}
      >
        <Typography variant="subtitle2" noWrap>
          {option2}
        </Typography>
      </IconButton>
    </Container>
  );
}

SelectOptionButton.propTypes = {
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired
};
