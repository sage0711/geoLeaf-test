import { useAccount } from 'wagmi';
import { useState, useEffect } from 'react';
import { useWeb3Modal } from '@web3modal/wagmi/react';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function ConnectWalletPopover() {
  const { open } = useWeb3Modal();
  const [shortAddress, setShortAddress] = useState('');
  const { address, isConnected, chain } = useAccount();

  function handleClickEvent() {
    open();
  }

  useEffect(() => {
    console.log('address:', address, isConnected);
    if (address) {
      const shortened = `${address.substring(0, 5)}...${address.substring(address.length - 4)}`;
      localStorage.setItem('walletAddress:', address);
      localStorage.setItem('chain', chain);
      setShortAddress(shortened);
    }
  }, [address, isConnected, chain]);

  return (
    <IconButton
      onClick={() => handleClickEvent()}
      sx={{
        width: 150,
        height: 40,
        color: '#fff',
        bgcolor: '#2DA7E6',
        borderRadius: 60,
      }}
    >
      <Typography variant="subtitle2" noWrap>
        {isConnected ? shortAddress : 'Connect Wallet'}
      </Typography>
    </IconButton>
  );
}
