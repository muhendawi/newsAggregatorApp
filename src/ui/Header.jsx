import styled from "styled-components";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import MainNav from "./MainNav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 0.5rem 1rem;
  height: 80px;
  /* media query for desktop */
  @media (min-width: 768px) {
    justify-content: center;
  }
`;
const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  /* media query for desktop */
  @media (min-width: 768px) {
    display: none;
  }
`;
const StyledFiSearch = styled(FiSearch)`
  cursor: pointer;
`;

function Header() {
  return (
    <StyledHeader>
      <MainNav />
      <MenuButton>
        <FiMenu size={30} color="#0d3c26" />
      </MenuButton>
      <StyledFiSearch size={30} color="#0d3c26" />
    </StyledHeader>
  );
}

export default Header;
