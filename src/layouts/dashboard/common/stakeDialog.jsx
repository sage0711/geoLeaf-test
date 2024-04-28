import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import SelectToken from './selectToken';
import { useResponsive } from '../../../hooks/use-responsive';

export default function StakeDialog(props) {
  const { step, setStep, open, setShowStatus } = props;
  const lgUp = useResponsive('up', 'lg');
  return (
    <Modal
      open={open}
      onClose={() => setShowStatus(false)}
      sx={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
        width: '100%',
        height: '100%',
        bottom: 'auto',
        p: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '',
      }}
    >
      <Grid
        sx={{
          maxWidth: '450px',
          background: '#171717',
          px: '18px',
          py: '20px',
          borderRadius: '13px',
          border: '1px solid #fff',
        }}
      >
        <Grid
          container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography
            sx={{ fontSize: lgUp ? '18px !important' : '12px !important', color: '#ffffff' }}
          >
            {step === 1 && 'Select LP Token pair users will stake'}
            {step === 2 && 'Single Token Pol Creation'}
            {step === 3 && 'Single Token Pol Creation'}
          </Typography>
          <Grid
            container
            sx={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => {
              setStep(1);
              setShowStatus(false);
            }}
          >
            <Box
              component="img"
              alt="tablc-ic"
              src="/assets/icons/ic_close.svg"
              sx={{ width: lgUp ? 22 : 14, display: 'flex', alignItems: 'end' }}
            />
            <Typography
              sx={{
                fontSize: lgUp ? 16 : 12,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Close
            </Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '25px',
              marginTop: '25px',
            }}
          >
            <Typography
              sx={{
                width: '35px',
                height: '35px',
                borderRadius: 10,
                background: step === 1 ? '#1994F2' : '#595F62',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                fontSize: 15,
                color: step === 1 ? '#ffffff' : '#AAA3A3',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  right: lgUp ? '-100px' : '-80px',
                  width: lgUp ? '100px' : '80px',
                  height: '1px',
                  background: 'black',
                  borderBottom: '1px dashed white',
                },
              }}
            >
              1
            </Typography>
            <Typography
              sx={{
                width: '35px',
                height: '35px',
                borderRadius: 10,
                background: step === 2 ? '#1994F2' : '#595F62',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                fontSize: 15,
                color: step === 2 ? '#ffffff' : '#AAA3A3',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  right: lgUp ? '-100px' : '-80px',
                  width: lgUp ? '100px' : '80px',
                  height: '1px',
                  background: 'black',
                  borderBottom: '1px dashed white',
                },
              }}
            >
              2
            </Typography>
            <Typography
              sx={{
                width: '35px',
                height: '35px',
                borderRadius: 10,
                background: step === 3 ? '#1994F2' : '#595F62',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                fontSize: 15,
                color: step === 3 ? '#ffffff' : '#AAA3A3',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  right: lgUp ? '-100px' : '-70px',
                  width: lgUp ? '100px' : '70px',
                  height: '1px',
                  background: 'black',
                  borderBottom: '1px dashed white',
                },
              }}
            >
              3
            </Typography>
            <Typography
              sx={{
                width: '35px',
                height: '35px',
                borderRadius: 10,
                background: step === 4 ? '#1994F2' : '#595F62',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 15,
                color: step === 4 ? '#ffffff' : '#AAA3A3',
                zIndex: 100,
              }}
            >
              4
            </Typography>
          </Grid>
        </Grid>

        {step === 1 && (
          <>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                marginBottom: lgUp ? 5 : 3,
              }}
            >
              <SelectToken />
              <SelectToken />
            </Grid>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                gap: 2,
                marginBottom: 3,
                flexDirection: lgUp ? 'row' : 'column',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={['DateField', 'DateField']}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    overflow: 'none',
                    '& .MuiStack-root': {
                      width: '100%',
                    },
                    '& .MuiInputBase-input': {
                      color: '#fff',
                    },
                    '& .MuiInputBase-root': { borderRadius: '100px', height: '40px' },
                    '& .MuiFormLabel-root': {
                      color: '#fff !important',
                      fontSize: '17px',
                      transform: 'translate(48px, -10px) scale(0.75)',
                      top: '2px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                      borderWidth: '1px !important',
                      padding: '9px 44px',
                    },
                  }}
                >
                  <DateField
                    label="Start Time"
                    defaultValue={dayjs('2022-04-17')}
                    sx={{ flex: '1 1', minWidth: '0px !important' }}
                    slots={{ openPickerIcon: FlightTakeoffIcon }}
                  />
                  <DateField
                    label="End Time"
                    defaultValue={dayjs('2022-04-17')}
                    sx={{ flex: '1 1', minWidth: '0px !important' }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid sx={{ width: '100%', display: 'flex', gap: 2, marginBottom: 5 }}>
              <SelectToken />
            </Grid>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: lgUp ? 'row' : 'column',
                gap: 2,
                marginBottom: 2,
              }}
            >
              <SelectToken />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={['DateField', 'DateField']}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    paddingTop: lgUp ? 0 : 2,
                    overflow: 'none',
                    '& .MuiInputBase-input': {
                      color: '#fff',
                    },
                    '& .MuiInputBase-root': { borderRadius: '100px', height: '40px' },
                    '& .MuiFormLabel-root': {
                      color: '#fff !important',
                      fontSize: '17px',
                      transform: 'translate(48px, -10px) scale(0.75)',
                      top: '2px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                      borderWidth: '1px !important',
                      padding: '9px 44px',
                    },
                  }}
                >
                  <DateField
                    label="Total Reward"
                    defaultValue={dayjs('2022-04-17')}
                    sx={{ width: '100%', minWidth: '0px !important' }}
                    slot={{ openPickerIcon: '123' }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid
              sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 3 }}
            >
              <Typography sx={{ textAlign: 'center', fontSize: lgUp ? 15 : 10, color: '#A3A3A3' }}>
                *Expected to start immediately and run until rewards run out in 08/04/2024 22:22:40.
                There may be slight differences between actual and expected block numbers.
              </Typography>
            </Grid>
            <Grid
              sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 3 }}
            >
              <IconButton
                sx={{
                  width: '100%',
                  height: lgUp ? 50 : 35,
                  color: '#fff',
                  bgcolor: '#2DA7E6',
                  borderRadius: 60,
                  gap: 1,
                }}
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                <Typography variant="subtitle2" noWrap>
                  Next
                </Typography>
              </IconButton>
            </Grid>
          </>
        )}
        {step === 2 && (
          <>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                marginBottom: 3,
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={['DateField', 'DateField']}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    overflow: 'none',
                    '& .MuiInputBase-input': {
                      color: '#fff',
                    },
                    '& .MuiInputBase-root': { borderRadius: '100px', height: '40px' },
                    '& .MuiFormLabel-root': {
                      color: '#fff !important',
                      fontSize: '17px',
                      transform: 'translate(48px, -10px) scale(0.75)',
                      top: '2px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                      borderWidth: '1px !important',
                      padding: '9px 44px',
                    },
                  }}
                >
                  <DateField
                    label="Set Amount"
                    defaultValue={dayjs('2022-04-17')}
                    sx={{ width: '100%', minWidth: '0px !important' }}
                    slot={{ openPickerIcon: '123' }}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={['DateField', 'DateField']}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    overflow: 'none',
                    '& .MuiInputBase-input': {
                      color: '#fff',
                    },
                    '& .MuiInputBase-root': { borderRadius: '100px', height: '40px' },
                    '& .MuiFormLabel-root': {
                      color: '#fff !important',
                      fontSize: '17px',
                      transform: 'translate(48px, -10px) scale(0.75)',
                      top: '2px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                      borderWidth: '1px !important',
                      padding: '9px 44px',
                    },
                  }}
                >
                  <DateField
                    label="Min Lock Time"
                    defaultValue={dayjs('2022-04-17')}
                    sx={{ width: '100%', minWidth: '0px !important' }}
                    slot={{ openPickerIcon: '123' }}
                  />
                </DemoContainer>
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                  components={['DateField', 'DateField']}
                  sx={{
                    display: 'flex',
                    width: '100%',
                    overflow: 'none',
                    '& .MuiInputBase-input': {
                      color: '#fff',
                    },
                    '& .MuiInputBase-root': { borderRadius: '100px', height: '40px' },
                    '& .MuiFormLabel-root': {
                      color: '#fff !important',
                      fontSize: '17px',
                      transform: 'translate(48px, -10px) scale(0.75)',
                      top: '2px',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#fff !important',
                      borderWidth: '1px !important',
                      padding: '9px 44px',
                    },
                  }}
                >
                  <DateField
                    label="Withdraw Fee"
                    defaultValue={dayjs('2022-04-17')}
                    sx={{ width: '100%', minWidth: '0px !important' }}
                    slot={{ openPickerIcon: '123' }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid
              sx={{ width: '100%', display: 'flex', flexDirection: 'row', gap: 2, marginBottom: 3 }}
            >
              <Typography sx={{ textAlign: 'center', fontSize: 15, color: '#A3A3A3' }}>
                *Expected to start immediately and run until rewards run out in 08/04/2024 22:22:40.
                There may be slight differences between actual and expected block numbers.
              </Typography>
            </Grid>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                marginBottom: 3,
                justifyContent: 'space-between',
              }}
            >
              <IconButton
                sx={{
                  width: '40%',
                  height: 50,
                  color: '#fff',
                  bgcolor: '#2E302E',
                  borderRadius: 60,
                  gap: 1,
                }}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                <Typography variant="subtitle2" noWrap>
                  Back
                </Typography>
              </IconButton>
              <IconButton
                sx={{
                  width: '40%',
                  height: 50,
                  color: '#fff',
                  bgcolor: '#2DA7E6',
                  borderRadius: 60,
                  gap: 1,
                }}
                onClick={() => {
                  setStep(step + 1);
                }}
              >
                <Typography variant="subtitle2" noWrap>
                  Next
                </Typography>
              </IconButton>
            </Grid>
          </>
        )}
        {step === 3 && (
          <>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 1,
                paddingBottom: 1.5,
                borderBottom: '1px solid #A3A3A3',
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Type</Typography>
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Created Pool Farm</Typography>
            </Grid>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 1,
                paddingBottom: 1.5,
                borderBottom: '1px solid #A3A3A3',
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Staked Token</Typography>
              <Typography sx={{ color: '#1994F2', fontSize: 14 }}>Geo Leaf</Typography>
            </Grid>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 1,
                paddingBottom: 1.5,
                borderBottom: '1px solid #A3A3A3',
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Start Time</Typography>
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>09/03/2024</Typography>
            </Grid>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 2,
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>End Time</Typography>
              <Typography sx={{ color: '#35B708', fontSize: 14 }}>-</Typography>
            </Grid>

            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 2,
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Address</Typography>
              <Typography sx={{ color: '#35B708', fontSize: 14 }}>089hgvs938495</Typography>
            </Grid>

            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 1,
                paddingBottom: 1.5,
                borderBottom: '1px solid #A3A3A3',
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Daily Reward</Typography>
              <Typography sx={{ color: '#35B708', fontSize: 14 }}>90</Typography>
            </Grid>
            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3,
                paddingBottom: 1.5,
                borderBottom: '1px solid #A3A3A3',
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Total Reward</Typography>
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>893056</Typography>
            </Grid>

            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 1,
                paddingBottom: 1.5,
                borderBottom: '1px solid #A3A3A3',
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Max amount of Token</Typography>
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>089hgvs938495</Typography>
            </Grid>

            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 1,
                paddingBottom: 1.5,
                borderBottom: '1px solid #A3A3A3',
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>Min Lock Time</Typography>
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>893056</Typography>
            </Grid>

            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}
            >
              <Typography sx={{ color: '#A3A3A3', fontSize: 14 }}>
                Emergency Withdraw Fee
              </Typography>
              <Typography sx={{ color: '#35B708', fontSize: 14 }}>9%</Typography>
            </Grid>

            <Grid
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                marginBottom: 2,
                justifyContent: 'space-between',
              }}
            >
              <IconButton
                sx={{
                  width: '40%',
                  height: 50,
                  color: '#fff',
                  bgcolor: '#2E302E',
                  borderRadius: 60,
                  gap: 1,
                }}
                onClick={() => {
                  setStep(step - 1);
                }}
              >
                <Typography variant="subtitle2" noWrap>
                  Back
                </Typography>
              </IconButton>
              <IconButton
                sx={{
                  width: '40%',
                  height: 50,
                  color: '#fff',
                  bgcolor: '#2DA7E6',
                  borderRadius: 60,
                  gap: 1,
                }}
                onClick={() => {
                  setStep(1);
                  setShowStatus(false);
                }}
              >
                <Typography variant="subtitle2" noWrap>
                  Next
                </Typography>
              </IconButton>
            </Grid>
          </>
        )}
      </Grid>
    </Modal>
  );
}

StakeDialog.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.any.isRequired,
  open: PropTypes.any.isRequired,
  setShowStatus: PropTypes.any.isRequired,
};
