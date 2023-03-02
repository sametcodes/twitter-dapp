import { Container } from 'styled/layout';
import { Navbar, NavbarContent, WalletAddress, NavbarLogo, ConnectButton } from 'styled/header';

import { useAccount, useConnect } from 'wagmi'

const Header = () => {
    // TODO: fix connecting issue
    const { address } = useAccount()
    const { connectors } = useConnect();
    const connector = connectors[0]

    return <Navbar>
        <Container>
            <NavbarContent>
                <NavbarLogo>Logo</NavbarLogo>
                {address && <WalletAddress>{address}</WalletAddress>}
                {!address && <ConnectButton
                    disabled={!connector.ready} onClick={() => connector.connect()}>
                    Connect
                </ConnectButton>}
            </NavbarContent>
        </Container >
    </Navbar>
}

export default Header;