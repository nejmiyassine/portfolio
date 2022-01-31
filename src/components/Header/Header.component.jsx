import React from 'react';
import * as Bi from 'react-icons/bi';
import { Container } from '../GlobalStyle/GlobalStyle.style';
import {
  Nav,
  NavMenu,
  NavList,
  NavItem,
  HeaderWrapper,
  NavLogo,
  NavItemLink,
} from './Header.style';
import { navItems } from './navItems';

const Header = ({ theme, themeToggler }) => {
  return (
    <HeaderWrapper id='header'>
      <Container>
        <Nav>
          <NavLogo href='/'>Yassine</NavLogo>

          <NavMenu>
            <NavList>
              {navItems.map((item) => (
                <NavItem key={item.id}>
                  <NavItemLink href={`#${item.id}`}>{item.icon}</NavItemLink>
                </NavItem>
              ))}
            </NavList>
          </NavMenu>

          <div onClick={themeToggler}>
            {theme === 'light' ? <Bi.BiMoon /> : <Bi.BiSun />}
          </div>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
