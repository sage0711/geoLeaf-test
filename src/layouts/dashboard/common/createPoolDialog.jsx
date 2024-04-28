import dayjs from 'dayjs';
import { ethers } from 'ethers';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAccount } from 'wagmi';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { DateField } from '@mui/x-date-pickers/DateField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import TokenStaking from '../../../abi/TokenStaking.json';
import { useResponsive } from '../../../hooks/use-responsive';

export default function CreatePoolDialog(props) {
  const { open, setShowStatus } = props;

  const [dailyReward, setDailyReward] = useState('');
  const [totalReward, setTotalReward] = useState('');

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [tokenAddress, setTokenAddress] = useState('');
  const [rewardTokenAddress, setRewardTokenAddress] = useState('');

  const { address, chain } = useAccount();

  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleFinishClick = async () => {
    console.log('Daily Reward:', dailyReward);
    console.log('Total Reward:', totalReward);
    console.log('Token Address:', tokenAddress);
    console.log('Reward Token Address:', rewardTokenAddress);
    console.log('startTime:', startTime);
    console.log('endTime:', endTime);

    if (address) {
      if (chain.name === 'Sepolia') {
        setShowStatus(false); // Close modal after processing
        await deployContract();
      } else {
        alert('Plz change the network');
      }
    } else {
      alert('Plz Connect Your Wallet');
    }
  };

  const deployContract = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = await provider.getSigner();

    const factoryAbi = TokenStaking;
    const factoryAddress = '0x7243f9ad22cf7b0424d8717fb98281750fc53ec3';
    const factory = new ethers.Contract(factoryAddress, factoryAbi, signer);
    alert('Deploying the Contract Now');
    const dateString = '2024-04-27T21:00:00.000Z';
    const date = new Date(dateString);
    const starttimestamp = Math.floor(date.getTime() / 1000);
    const dateString1 = '2024-04-28T21:00:00.000Z';
    const date1 = new Date(dateString1);
    const endtimestamp = Math.floor(date1.getTime() / 1000);
    try {
      const tx = await factory.createStakingContract(
        tokenAddress,
        rewardTokenAddress,
        starttimestamp,
        endtimestamp,
        ethers.parseEther(dailyReward),
        ethers.parseEther(totalReward)
      );
      await tx.wait();
      alert('Staking contract deployed!');
    } catch (error) {
      alert('Error deploying contract:', error);
      console.log('Error deploying contract:', error);
    }
  };

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
            Select LP Token pair users will stake
          </Typography>
          <Grid
            container
            sx={{ display: 'flex', cursor: 'pointer' }}
            onClick={() => {
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
        </Grid>

        <Grid
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            marginBottom: lgUp ? 5 : 3,
            paddingTop: 3,
          }}
        >
          <TextField
            id="outlined-select-currency"
            label="Select Token Address"
            value={tokenAddress}
            onChange={handleInputChange(setTokenAddress)}
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
          <TextField
            id="outlined-select-currency"
            label="Select Token Address"
            value={rewardTokenAddress}
            onChange={handleInputChange(setRewardTokenAddress)}
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
                value={dayjs(startTime)}
                // value={startTime}
                onChange={setStartTime}
                sx={{ flex: '1 1', minWidth: '0px !important' }}
                slots={{ openPickerIcon: FlightTakeoffIcon }}
              />
              <DateField
                label="End Time"
                defaultValue={dayjs('2022-04-17')}
                value={dayjs(endTime)}
                onChange={setEndTime}
                sx={{ flex: '1 1', minWidth: '0px !important' }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: lgUp ? 'row' : 'column',
            gap: 2,
            marginBottom: 2,
            paddingBottom: 2,
          }}
        >
          <TextField
            id="outlined-select-currency"
            label="Daily Reward"
            value={dailyReward}
            onChange={handleInputChange(setDailyReward)}
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
          <TextField
            id="outlined-select-currency"
            label="Total Reward"
            value={totalReward}
            onChange={handleInputChange(setTotalReward)}
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
            onClick={handleFinishClick}
          >
            <Typography variant="subtitle2" noWrap>
              Finish
            </Typography>
          </IconButton>
        </Grid>
      </Grid>
    </Modal>
  );
}

CreatePoolDialog.propTypes = {
  open: PropTypes.any.isRequired,
  setShowStatus: PropTypes.any.isRequired,
};
