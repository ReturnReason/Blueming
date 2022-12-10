import { Button } from 'components/index';
import { PRIMARY_COLOR, WHITE_COLOR } from 'components/colors/common';
import styled from 'styled-components';

export default function NavBar() {
  return (
    <Nav>
      <h1>Symbol</h1>
      <MenuList>
        <li>
          <Button bgColor={WHITE_COLOR} fontColor={PRIMARY_COLOR}>
            Sign in
          </Button>
        </li>
        <li>
          <Button bgColor={WHITE_COLOR} fontColor={PRIMARY_COLOR}>
            Sign up
          </Button>
        </li>
      </MenuList>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 46px;
  background-color: ${PRIMARY_COLOR};
  display: flex;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;

  h1 {
    color: ${WHITE_COLOR};
  }
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  li {
    &:first-child {
      margin-right: 15px;
    }
  }
`;
