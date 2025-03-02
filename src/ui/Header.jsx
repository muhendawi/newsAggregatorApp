import styled, { css } from "styled-components";
import MainNav from "./MainNav";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Modal from "../ui/Modal";
import { AnimatePresence, motion } from "framer-motion";
import MenuBtn from "./MenuBtn";
import SearchBtn from "./SearchBtn";
import SearchContent from "./SearchContent";

const StyledHeader = styled.header`
  /* position: relative; */
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

const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid
    ${({ $isSearch }) =>
      $isSearch ? "var(--color-background-secondary)" : "transparent"};
  background-color: var(--color-background-greenish);
  min-width: 300px;
  width: 70dvw;
  cursor: pointer;
  padding: 0.7rem 1rem;
  ${({ $isSearch }) =>
    $isSearch
      ? css`
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        `
      : css`
          border-radius: 1rem;
        `}

  color: var(--color-text-greish-light);
  font-size: 1.3rem;
  outline: none;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4); */
  &::placeholder {
    color: inherit;
    /* text-align: center; */
  }
  /* media query for desktop */
  @media (min-width: 768px) {
    width: 576px;
  }
`;

function Header() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <StyledHeader>
      <MainNav />
      <MenuBtn toggleSidebarMenu={() => setIsSidebarOpen(!isSidebarOpen)} />
      <SearchBtn
        toggleSearchModal={() => setIsSearchModalOpen(!isSearchModalOpen)}
      />
      {/* The Search Modal 👇 */}
      <AnimatePresence mode="popLayout">
        {isSearchModalOpen && (
          <Modal onClose={() => setIsSearchModalOpen(false)}>
            <SearchContent
              search={search}
              setSearch={(e) => setSearch(e.target.value)}
            />
          </Modal>
        )}
      </AnimatePresence>
      {/* The Sidebar Menu 👇 */}
      <AnimatePresence>
        {isSidebarOpen && (
          <SidebarMenu onClose={() => setIsSidebarOpen(false)}>
            <MainNav
              isSidebarOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
          </SidebarMenu>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
}

export default Header;
