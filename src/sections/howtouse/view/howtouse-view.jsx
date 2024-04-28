import { Tooltip } from 'react-tooltip';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useResponsive } from '../../../hooks/use-responsive';
import { HEADER } from '../../../layouts/dashboard/config-layout';

const SPACING = 100;

export default function HowToUsePageView() {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Container maxWidth="xl" sx={{ position: 'relative' }}>
      <Grid
        container
        spacing={3}
        sx={{
          py: `${HEADER.H_MOBILE + SPACING}px`,
          ...(lgUp && {
            paddingTop: `${HEADER.H_DESKTOP + SPACING}px`,
          }),
        }}
      >
        <Container>
          <Container sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: 55, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 1 }}>
              How To <span style={{ color: '#1994F2' }}>Use</span>
            </Typography>
            <Typography sx={{ fontSize: 17, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 10 }}>
              Quick Guide to Purchasing Crypto
            </Typography>
          </Container>
          <Container sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <Box
              component="img"
              alt="discord"
              src="/assets/icons/howtouse-middle-background.svg"
              sx={{ width: 220 }}
            />
            <Container sx={{ maxWidth: '300px !important', position: 'absolute', left: 0 }}>
              <Typography
                sx={{
                  fontSize: 20,
                  color: '#FFFFFF',
                  lineHeight: 1.5,
                  marginBottom: 1,
                  textAlign: 'right',
                }}
                data-tip
                data-for="Account_Setup"
              >
                <span style={{ color: '#1994F2' }}>Step 1:</span>Account Setup
              </Typography>
              {!lgUp ? (
                <Tooltip id="Account_Setup" placement="bottom" arrow sx={{ zIndex: 1000 }}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                      marginBottom: 5,
                      textAlign: 'right',
                    }}
                  >
                    Sign up for an account on GeoLeaf. Complete the verification process for
                    security.
                  </Typography>
                </Tooltip>
              ) : (
                <Typography
                  sx={{
                    fontSize: 13,
                    color: '#FFFFFF',
                    lineHeight: 1.5,
                    marginBottom: 5,
                    textAlign: 'right',
                  }}
                >
                  Sign up for an account on GeoLeaf. Complete the verification process for security
                </Typography>
              )}
            </Container>

            <Container
              sx={{ maxWidth: '300px !important', position: 'absolute', right: 0, top: 80 }}
            >
              <Typography
                sx={{ fontSize: 20, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 1 }}
                data-tip
                data-for="wallet-integration"
              >
                <span style={{ color: '#1994F2' }}>Step 2:</span> Wallet Integration
              </Typography>
              {!lgUp ? (
                <Tooltip id="Account_Setup" placement="bottom" arrow sx={{ zIndex: 1000 }}>
                  <Typography
                    sx={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}
                  >
                    Connect your digital wallet to GeoLeaf. Ensure your have sufficient funds for
                    the purchase.
                  </Typography>
                </Tooltip>
              ) : (
                <Typography
                  sx={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}
                >
                  Connect your digital wallet to GeoLeaf. Ensure your have sufficient funds for the
                  purchase.
                </Typography>
              )}
            </Container>

            <Container
              sx={{ maxWidth: '300px !important', position: 'absolute', left: 0, top: 160 }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  color: '#FFFFFF',
                  lineHeight: 1.5,
                  marginBottom: 1,
                  textAlign: 'right',
                }}
                data-tip
                data-for="browse-markets"
              >
                <span style={{ color: '#1994F2' }}>Step 3:</span> Browse Markets
              </Typography>
              {!lgUp ? (
                <Tooltip id="browse-markets" placement="bottom" arrow sx={{ zIndex: 1000 }}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                      marginBottom: 5,
                      textAlign: 'right',
                    }}
                  >
                    Navigate to the &apos;Market&apos; section. Explorer available cryptocurrencies
                    and their prices.
                  </Typography>
                </Tooltip>
              ) : (
                <Typography
                  sx={{
                    fontSize: 13,
                    color: '#FFFFFF',
                    lineHeight: 1.5,
                    marginBottom: 5,
                    textAlign: 'right',
                  }}
                >
                  Navigate to the &apos;Market&apos; section. Explorer available cryptocurrencies
                  and their prices.
                </Typography>
              )}
            </Container>

            <Container
              sx={{ maxWidth: '300px !important', position: 'absolute', right: 0, top: 230 }}
            >
              <Typography
                sx={{ fontSize: 20, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 1 }}
                data-tip
                data-for="make_purchase"
              >
                <span style={{ color: '#1994F2' }}>Step 4:</span> Make a Purchase
              </Typography>
              {!lgUp ? (
                <Tooltip id="make_purchase" placement="bottom" arrow sx={{ zIndex: 1000 }}>
                  <Typography
                    sx={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}
                  >
                    Select the cryptocurrency you want to buy. Enter the amount you wish to
                    purchase.
                  </Typography>
                </Tooltip>
              ) : (
                <Typography
                  sx={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}
                >
                  Select the cryptocurrency you want to buy. Enter the amount you wish to purchase.
                </Typography>
              )}
            </Container>

            <Container
              sx={{ maxWidth: '300px !important', position: 'absolute', left: 0, top: 310 }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  color: '#FFFFFF',
                  lineHeight: 1.5,
                  marginBottom: 1,
                  textAlign: 'right',
                }}
                data-tip
                data-for="transaction_detail"
              >
                <span style={{ color: '#1994F2' }}>Step 5:</span> Transaction Detail
              </Typography>
              {!lgUp ? (
                <Tooltip id="transaction_detail" placement="bottom" arrow sx={{ zIndex: 1000 }}>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: '#FFFFFF',
                      lineHeight: 1.5,
                      marginBottom: 5,
                      textAlign: 'right',
                    }}
                  >
                    Confirm your purchase. Receive your cryptocurrency in your GeoLeaf wallet.
                  </Typography>
                </Tooltip>
              ) : (
                <Typography
                  sx={{
                    fontSize: 13,
                    color: '#FFFFFF',
                    lineHeight: 1.5,
                    marginBottom: 5,
                    textAlign: 'right',
                  }}
                >
                  Confirm your purchase. Receive your cryptocurrency in your GeoLeaf wallet.
                </Typography>
              )}
            </Container>

            <Container
              sx={{ maxWidth: '300px !important', position: 'absolute', right: 0, top: 380 }}
            >
              <Typography
                sx={{ fontSize: 20, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 1 }}
                data-tip
                data-for="secure_assets"
              >
                <span style={{ color: '#1994F2' }}>Step 6:</span> Secure Your Assets
              </Typography>
              {!lgUp ? (
                <Tooltip id="secure_assets" placement="bottom" arrow sx={{ zIndex: 1000 }}>
                  <Typography
                    sx={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}
                  >
                    Monitor your investment on your dashboard. Utilize security features to protect
                    your assets.
                  </Typography>
                </Tooltip>
              ) : (
                <Typography
                  sx={{ fontSize: 13, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}
                >
                  Monitor your investment on your dashboard. Utilize security features to protect
                  your assets.
                </Typography>
              )}
            </Container>
            {/* 
            <Container sx={{ height: '100%', position: 'absolute', right: 0, bottom: 0 }}>
              <img src="/assets/icons/howtouse-down-background.svg" alt="background" />
            </Container> */}
          </Container>
        </Container>
      </Grid>
      <Container sx={{ height: '100%', position: 'absolute', right: 0, top: 0 }}>
        <img src="/assets/icons/howtouse-top-background.svg" alt="background" />
      </Container>
    </Container>
  );
}
