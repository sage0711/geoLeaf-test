import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';

import { NAV } from './config-layout';
import navConfig from './config-navigation';

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack
      component="nav"
      spacing={2}
      sx={{
        bgcolor: '#46A2D1',
      }}
    >
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        background:'#46A2D1',
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4 }} />

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
        background: '#46A2D1',
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  return (
    <Stack
      component="div"
      spacing={2}
      sx={{
        display: 'flex',
        bgcolor: '#46A2D1',
        '&:hover': {
          bgcolor: 'white',
        },
      }}
    >
      <ListItemButton
        component={RouterLink}
        href={item.path}
        sx={{
          minHeight: 44,
          typography: 'body2',
          color: 'white',
          marginLeft: '6px !important',
          paddingLeft: 6,
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          bgcolor: '#46A2D1',
          '&:hover': {
            bgcolor: '#2DA7E6',
          },
        }}
      >
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>

        <Box component="span">{item.title} </Box>

        <Box component="span" sx={{ width: 12, height: 12, mr: 2, display:'flex', position:'absolute', right:2}}>{item.arrow} </Box>
      </ListItemButton>
    </Stack>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
