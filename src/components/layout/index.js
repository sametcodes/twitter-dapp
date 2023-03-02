import { Container } from 'styled/layout';
import Header from 'components/header';

const Layout = ({ children }) => {
    return <>
        <Header />

        <Container>
            {children}
        </Container>
    </>
}

export default Layout;