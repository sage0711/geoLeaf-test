import TextField from '@mui/material/TextField';

import { useResponsive } from '../../../hooks/use-responsive';

export default function SelectToken() {
  const lgUp = useResponsive('up', 'lg');

  return (
    <TextField
      id="outlined-select-currency"
      label="Select Token"
      focused
      sx={{
        width: '100%',
        color: '#fff',
        height: lgUp ? '20px' : '10px',
        '& .MuiInputBase-root': { borderRadius: '100px', height: '40px' },
        '& .MuiFormLabel-root': {
          color: '#fff !important',
          fontSize: '17px',
          transform: 'translate(68px, -10px) scale(0.75)',
          top: '2px',
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#fff !important',
          borderWidth: '1px !important',
          padding: '9px 64px',
        },
        '& .MuiInputBase-input': {
          color: '#fff',
          padding: '31px 29px',
        },
      }}
    />
  );
}
