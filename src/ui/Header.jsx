import styled from "styled-components";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 0.5rem 1rem;
`;
const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const StyledFiSearch = styled(FiSearch)`
  cursor: pointer;
`;

function Header() {
  return (
    <StyledHeader>
      <MenuButton>
        <FiMenu size={30} color="#0d3c26" />
      </MenuButton>
      <StyledFiSearch size={30} color="#0d3c26" />
    </StyledHeader>
  );
}

export default Header;
