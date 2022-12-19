import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

export default function Layout() {
  return (
    <Container>
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
