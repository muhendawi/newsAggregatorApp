import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
  margin-right: auto;
  width: 100%;
  padding: 1rem;
  @media (max-width: 768px) {
    display: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "block" : "none")};
  }
`;
const NavList = styled.ul`
  display: flex;
  gap: ${({ $isSidebarOpen }) => ($isSidebarOpen ? "0" : "0.5rem")};
  margin: 0;
  padding: 0;
  flex-direction: ${({ $isSidebarOpen }) => $isSidebarOpen && "column"};
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    color: var(--color-text-brown-light);
    font-size: 1rem;
    padding: 0.5rem 1.3rem;
    transition: all 0.3s;
    ${({ $isSidebarOpen }) =>
      $isSidebarOpen &&
      css`
        color: var(--color-text-greish-light);
        font-size: 1.7rem;
      `}
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-text-greish-light);
    background-color: var(--color-background-greenish);
    border-radius: 1.4rem;
    ${({ $isSidebarOpen }) =>
      $isSidebarOpen &&
      css`
        background-color: transparent;
        color: var(--color-text-green);
      `}
  }
`;

function MainNav({ isSidebarOpen = false, onClose }) {
  const liVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <StyledNav $isSidebarOpen={isSidebarOpen}>
      <NavList $isSidebarOpen={isSidebarOpen}>
        <motion.li
          variants={liVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <StyledNavLink
            to="/newsFeed"
            $isSidebarOpen={isSidebarOpen}
            onClick={onClose}
          >
            <span>News Feed</span>
          </StyledNavLink>
        </motion.li>
        <motion.li
          variants={liVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <StyledNavLink
            to="/guardian"
            $isSidebarOpen={isSidebarOpen}
            onClick={onClose}
          >
            <span>The Guardian</span>
          </StyledNavLink>
        </motion.li>
        <motion.li
          variants={liVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <StyledNavLink
            to="/nyTimes"
            $isSidebarOpen={isSidebarOpen}
            onClick={onClose}
          >
            <span>NYTimes</span>
          </StyledNavLink>
        </motion.li>
        <motion.li
          variants={liVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <StyledNavLink
            to="/NewsAPI"
            $isSidebarOpen={isSidebarOpen}
            onClick={onClose}
          >
            <span>News API</span>
          </StyledNavLink>
        </motion.li>
      </NavList>
    </StyledNav>
  );
}

export default MainNav;
