import { Container } from 'styled/layout';
import { Navbar, NavbarContent, WalletAddress, NavbarLogo } from 'styled/header';
import { ButtonInverse } from 'styled/shared';

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
                {!address && <ButtonInverse
                    disabled={!connector.ready} onClick={() => connector.connect()}>
                    Connect
                </ButtonInverse>}
            </NavbarContent>
        </Container >
    </Navbar>
}

export default Header;