import styled from 'styled-components';
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

/* height: ${} */
export const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  &.active {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  }
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
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(28, 37, 54, 0.8);
  width: 90%;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  backdrop-filter: blur(10px);
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
  color: ${({ theme }) => theme.textColor};
  font-size: 1.25rem;
  padding: 0.4rem;
  display: flex;
  border-radius: 5rem;
`;
