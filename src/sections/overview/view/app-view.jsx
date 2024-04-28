import { useState, useEffect } from 'react';
import { loadSlim } from '@tsparticles/slim';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useResponsive } from '../../../hooks/use-responsive';
import { HEADER } from '../../../layouts/dashboard/config-layout';

const SPACING = 100;
const homeData = [
  {
    price: '$166,244',
    title: 'Market Cap',
  },
  {
    price: '$166,244',
    title: 'Total Treasury Value',
  },
  {
    price: '$166,244',
    title: 'Most Recent Buyback',
  },
  {
    price: '$166,244',
    title: 'Daily Volume',
  },
];
export default function AppView() {
  const lgUp = useResponsive('up', 'lg');
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

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
            <Typography
              sx={{ fontSize: lgUp ? 50 : 20, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 3 }}
            >
              Weclome to <span style={{ color: '#1994F2' }}>GeoLeaf</span> Multi
              <br /> Chain Staking Platform
            </Typography>
            <Typography sx={{ fontSize: 17, color: '#FFFFFF', lineHeight: 1.5, marginBottom: 5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor <br />
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim vaniam, qui
            </Typography>
          </Container>
          <Container
            sx={{ justifyContent: 'center', display: 'flex', gap: lgUp ? 10 : 5, marginBottom: 20 }}
          >
            <IconButton
              sx={{
                width: lgUp ? 200 : 100,
                height: lgUp ? 50 : 30,
                color: '#fff',
                bgcolor: '#2BA5E7',
                borderRadius: 60,
              }}
            >
              <Typography variant={lgUp ? 'subtitle2' : 'caption'} noWrap>
                Create Pool
              </Typography>
            </IconButton>

            <IconButton
              sx={{
                width: lgUp ? 200 : 100,
                height: lgUp ? 50 : 30,
                color: '#fff',
                bgcolor: 'transparent',
                borderRadius: 60,
                border: '1px solid',
                borderColor: '#2BA5E7',
              }}
            >
              <Typography variant={lgUp ? 'subtitle2' : 'caption'} noWrap>
                See Benefit
              </Typography>
            </IconButton>
          </Container>
          <Grid
            container
            spacing={2}
            sx={{
              height: lgUp ? '136px !important' : '430px',
              borderRadius: 2,
              border: '1px solid',
              borderColor: '#343434',
              px: 4,
              py: 2,
              display: lgUp ? 'flex !important' : 'block',
            }}
          >
            {homeData.map((data, index) => (
              <Grid
                item
                xs={3}
                sx={{
                  borderRight: lgUp && index !== homeData.length - 1 ? '1px solid' : 'none',
                  borderColor: '#343434',
                  px: 4,
                  py: 2,
                  borderBottom: !lgUp && index !== homeData.length - 1 ? '1px solid' : 'none',
                  width: !lgUp ? '100%' : 'none'
                }}
              >
                <Typography sx={{ fontSize: 31, color: '#FFFFFF' }}>{data.price}</Typography>
                <Typography sx={{ fontSize: 13, color: '#6E6E6E' }}>{data.title}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          width="70px"
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },

            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'repulse',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </Container>
  );
}
