import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

export default function SortPanel() {
  return (
    <div>
      <Input
        autoFocus
        fullWidth
        disableUnderline
        placeholder="Sort By"
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
            <img src="/assets/icons/ic_sortby.svg" alt="sortby" style={{ color: 'white' }} />
          </InputAdornment>
        }
        sx={{
          fontSize: '12px',
          paddingLeft: 2,
          paddingRight: '1px',
          fontWeight: 'fontWeightBold',
          borderRadius: 6,
          width: 150,
          height: 40,
          bgcolor: '#333333',
          color: 'white',
        }}
      />
    </div>
  );
}
