import { useState } from 'react';
import PropTypes from 'prop-types';
import { WagmiProvider } from 'wagmi';
import { sepolia, bscTestnet } from 'wagmi/chains';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import Header from './header';

const projectId = '3269f7ff1ed4dcdd42fe13742ebd6656';

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [sepolia, bscTestnet];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <WagmiProvider config={config}>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          bgcolor: '#171717',
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </WagmiProvider>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
