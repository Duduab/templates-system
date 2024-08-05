import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.h1`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: space-between;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>My Portfolio</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/category/landing">Landing Pages</NavLink>
        <NavLink to="/category/portfolio">Portfolios</NavLink>
        <NavLink to="/category/business">Business Websites</NavLink>
        {/* Add more categories as needed */}
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
