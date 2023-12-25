import styled from 'styled-components';
import { breakpoints } from '../../styles/breakpoints/breakpoints';
import { fontMedium } from '../../styles/font/font';
import { zFixed } from '../../styles/index/index';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({ theme }) => theme.body};
    z-index: ${zFixed};
`;

export const NavbarContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${breakpoints.desktop}) {
        max-width: ${breakpoints.desktop};
    }

    @media (min-width: ${breakpoints.tablet}) {
        max-width: ${breakpoints.tablet};
    }
`;

export const Nav = styled.nav`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.bodyColor};
`;

export const NavLogo = styled.a`
    color: ${({ theme }) => theme.firstColor};
    font-weight: ${fontMedium};
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.firstColorAlt};
    }
`;

export const NavMenu = styled.div`
    position: fixed;
    bottom: 1rem;
    background-color: rgba(28, 37, 54, 0.8);
    width: 90%;
    border-radius: 4rem;
    padding: 0.75rem 0.5rem;
    backdrop-filter: blur(10px);

    @media (min-width: ${breakpoints.mobile}) {
        width: 328px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }
`;

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavItem = styled.li`
    color: ${({ theme }) => theme.textColor};
    font-size: 1.25rem;
    padding: 0.4rem;
    display: flex;
    border-radius: 5rem;
`;

export const NavItemLink = styled.a`
    color: #fff;
    font-size: 1.25rem;
    padding: 0.4rem;
    display: flex;
    border-radius: 5rem;

    &.active-link {
        background: linear-gradient(
            180deg,
            hsla(250, 66%, 75%, 1),
            hsla(250, 66%, 75%, 0.2)
        );
        box-shadow: 0 0 16px hsla(250, 66%, 75%, 0.2);
    }
`;

export const ChangeTheme = styled.div`
    & svg {
        font-size: 1.25rem;
        cursor: pointer;
        transition: 0.3s;
    }

    &:hover {
        color: ${({ theme }) => theme.firstColor};
    }
`;
