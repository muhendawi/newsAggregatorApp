import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  margin-right: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavList = styled.ul`
  display: flex;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
`;
const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    /* gap: 1.2rem; */
    color: var(--color-text-green);
    font-size: 1.2rem;
    padding: 0.6rem 1.3rem;
    transition: all 0.3s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-text-brown);
    background-color: var(--color-background-secondary);
    border-radius: 1.5rem;
  }
`;
function MainNav() {
  return (
    <StyledNav>
      <NavList>
        <li>
          <StyledNavLink to="/newsFeed">
            <span>News Feed</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/guardian">
            <span>The Guardian</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/nyTimes">
            <span>NYTimes</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/NewsAPI">
            <span>News API</span>
          </StyledNavLink>
        </li>
      </NavList>
    </StyledNav>
  );
}

export default MainNav;
