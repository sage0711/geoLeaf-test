import { useState } from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';

import SortPanel from 'src/layouts/dashboard/common/sortby';
import SearchToken from 'src/layouts/dashboard/common/searchtoken';
import StakeDialog from 'src/layouts/dashboard/common/stakeDialog';
import CreatePoolButton from 'src/layouts/dashboard/common/poolbutton';
import CreatePoolDialog from 'src/layouts/dashboard/common/createPoolDialog';
import SelectOptionButton from 'src/layouts/dashboard/common/selectoptionbutton';

import { useResponsive } from '../../../hooks/use-responsive';
import { HEADER } from '../../../layouts/dashboard/config-layout';

const SPACING = 100;

const poolData = [
  {
    Token: 'WPT',
    Earned: '90 Days',
    TotalStake: '$91,084,98 USD',
    APR: '0.178',
    EndDay: '183 Days',
    kyc: '$0.00 USD',
    status: false,
  },
  {
    Token: 'WPT',
    Earned: '90 Days',
    TotalStake: '$91,084,98 USD',
    APR: '15%',
    EndDay: '183 Days',
    kyc: '$0.00 USD',
    status: true,
  },
  {
    Token: 'WPT',
    Earned: '90 Days',
    TotalStake: '$91,084,98 USD',
    APR: '0.178%',
    EndDay: '183 Days',
    kyc: '$0.00 USD',
    status: false,
  },
  {
    Token: 'WPT',
    Earned: '90 Days',
    TotalStake: '$91,084,98 USD',
    APR: '15%',
    EndDay: '183 Days',
    kyc: '$0.00 USD',
    status: true,
  },
];

export default function CreatePoolView() {
  const lgUp = useResponsive('up', 'lg');
  const [showStatus, setShowStatus] = useState(false);
  const [step, setStep] = useState(1);
  const [showCreateDialogStatus, setShowCreateDialogStatus] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ position: 'relative' }}>
      <Grid
        container
        spacing={3}
        sx={{
          paddingTop: `${HEADER.H_MOBILE + SPACING}px`,
          paddingBottom: `${SPACING}px`,
          ...(lgUp && {
            paddingTop: `${HEADER.H_DESKTOP + SPACING}px`,
          }),
        }}
      >
        <Container>
          <Container sx={{ textAlign: 'center' }}>
            <Typography
              sx={{ fontSize: lgUp ? 55 : 35, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 1 }}
            >
              Create <span style={{ color: '#1994F2' }}>Pool</span>
            </Typography>
            <Typography
              sx={{ fontSize: lgUp ? 17 : 12, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}
            >
              Embark on a journey of financial growth with GeoLeaf custom staking pools.
            </Typography>
          </Container>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 3,
              flexDirection: lgUp ? 'row' : 'column',
              alignItems: !lgUp && 'center',
            }}
          >
            <SortPanel />
            <SearchToken />
            <SelectOptionButton option1="Live" option2="Finished" />
            <SelectOptionButton option1="Token" option2="NFT" />
            <IconButton
              sx={{
                width: 100,
                height: 40,
                color: '#fff',
                bgcolor: '#2DA7E6',
                borderRadius: 60,
              }}
              onClick={() => {
                setShowCreateDialogStatus(true);
              }}
            >
              <Typography variant="caption" noWrap>
                Create Pool
              </Typography>
            </IconButton>
          </Container>
        </Container>
      </Grid>
      <Grid>
        <Container
          sx={{
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography sx={{ fontSize: 22, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 1 }}>
            10 Total Pools
          </Typography>
          <Typography
            sx={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5, maxWidth: 700 }}
          >
            BabyDoge does not endorse or promote any farms/pools as they can be created by anyone.
            Anyone can create a farm/pool or token including bad actors.
          </Typography>
        </Container>

        <TableContainer
          sx={{
            bgcolor: '#000000',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: 16 }}>
                  Token
                </TableCell>
                <TableCell
                  sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: 16 }}
                  align="right"
                >
                  LGC Earned
                </TableCell>
                <TableCell
                  sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: 16 }}
                  align="right"
                >
                  Total Staked
                </TableCell>
                <TableCell
                  sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: 16 }}
                  align="right"
                >
                  APR
                </TableCell>
                <TableCell
                  sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: 16 }}
                  align="right"
                >
                  Ends Days
                </TableCell>
                <TableCell
                  sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: 16 }}
                  align="right"
                >
                  KYCd
                </TableCell>
                <TableCell
                  sx={{ bgcolor: '#000000', color: '#ffffff', fontSize: 16 }}
                  align="right"
                >
                  Create Pool
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {poolData.map((row, index) => (
                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ color: '#7A857D', gap: 1, display: 'flex' }}
                  >
                    <Box
                      component="img"
                      alt="tablc-ic"
                      src="/assets/icons/ic_table.svg"
                      sx={{ width: 22 }}
                    />
                    <span
                      style={{
                        fontSize: 16,
                        color: '#7A857D',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {row.Token}
                    </span>
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#7A857D' }}>
                    {row.Earned}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#7A857D' }}>
                    {row.TotalStake}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#7A857D' }}>
                    {row.APR}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#7A857D' }}>
                    {row.EndDay}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#7A857D' }}>
                    {' '}
                    {row.kyc}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#7A857D' }}>
                    <CreatePoolButton
                      flag={row.status}
                      showStatus={showStatus}
                      setShowStatus={setShowStatus}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <StakeDialog step={step} setStep={setStep} open={showStatus} setShowStatus={setShowStatus} />
      <CreatePoolDialog open={showCreateDialogStatus} setShowStatus={setShowCreateDialogStatus} />
    </Container>
  );
}
