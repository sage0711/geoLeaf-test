import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

import Iconify from 'src/components/iconify';

export default function Searchbar() {
  return (
    <div>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Search here…"
        endAdornment={
          <InputAdornment
            position="center"
            sx={{
              maxHeight: 'none',
              width: 44,
              height: 37,
              bgcolor: '#2BA5E7',
              borderRadius: 60,
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Iconify icon="eva:search-fill" sx={{ color: 'white' }} />
          </InputAdornment>
        }
        sx={{
          fontSize: '12px',
          paddingLeft: 2,
          paddingRight: '1px',
          fontWeight: 'fontWeightBold',
          borderRadius: 6,
          width: 300,
          height: 40,
          bgcolor: '#333333',
          color: 'white',
        }}
      />
    </div>
  );
}
