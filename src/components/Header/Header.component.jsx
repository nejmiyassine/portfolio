import React from 'react';
import * as Bi from 'react-icons/bi';
import {
    Nav,
    NavMenu,
    NavList,
    NavItem,
    HeaderWrapper,
    NavLogo,
    NavItemLink,
    ChangeTheme,
    NavbarContainer,
} from './Header.style';
import { navItems } from './navItems';

const Header = ({ theme, themeToggler }) => {
    return (
        <HeaderWrapper id='header'>
            <Nav>
                <NavbarContainer>
                    <NavLogo href='/'>Yassine</NavLogo>

                    <NavMenu>
                        <NavList>
                            {navItems.map((item) => (
                                <NavItem key={item.id}>
                                    <NavItemLink href={`#${item.id}`}>
                                        {item.icon}
                                    </NavItemLink>
                                </NavItem>
                            ))}
                        </NavList>
                    </NavMenu>

                    <ChangeTheme onClick={themeToggler}>
                        {theme === 'light' ? <Bi.BiMoon /> : <Bi.BiSun />}
                    </ChangeTheme>
                </NavbarContainer>
            </Nav>
        </HeaderWrapper>
    );
};

export default Header;
