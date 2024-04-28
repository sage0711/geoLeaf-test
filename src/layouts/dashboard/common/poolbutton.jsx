import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function CreatePoolButton(props) {
  const { flag, setShowStatus } = props;

  return (
    <>
      {flag === true ? (
        <IconButton
          sx={{
            width: 130,
            height: 35,
            color: '#fff',
            bgcolor: '#2DA7E6',
            borderRadius: 60,
          }}
          onClick={() => setShowStatus(true)}
        >
          <Typography variant="subtitle2" noWrap>
            Stake Now
          </Typography>
        </IconButton>
      ) : (
        <IconButton
          sx={{
            width: 130,
            height: 35,
            color: '#fff',
            bgcolor: '#2E302E',
            borderRadius: 60,
            gap: 1,
          }}
        >
          <Box component="img" alt="tablc-ic" src="/assets/icons/ic_lock.svg" sx={{ width: 15 }} />
          <Typography variant="subtitle2" noWrap>
            Locked
          </Typography>
        </IconButton>
      )}
    </>
  );
}

CreatePoolButton.propTypes = {
  flag: PropTypes.bool.isRequired,
  setShowStatus: PropTypes.any.isRequired,
};
