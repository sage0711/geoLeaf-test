import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from 'src/routes/components';

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        display: 'inline-flex',
        justifyContent: 'center',
        padding: '24px 14px 14px 14px',
        borderBottom: '1px solid',
        color: 'white',
        marginBottom: '50px',
        width:'100%'
      }}
      {...other}
    >
      <img src="/assets/icons/logo.svg" alt='logo' />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
