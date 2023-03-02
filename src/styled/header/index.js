import styled from 'styled-components';

export const Navbar = styled.nav`
    background-color: #00acee;
    color: #fff;
`

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavbarLogo = styled.h2``

export const WalletAddress = styled.p`
    font-size: 12px;
`

export const ConnectButton = styled.button`
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid #777;
    border-radius: 25px;
    cursor: pointer;

    &:hover{
        background-color: #eee;
    }
`