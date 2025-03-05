import styled from "styled-components";
import MainNav from "./MainNav";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Modal from "../ui/Modal";
import { AnimatePresence } from "framer-motion";
import MenuBtn from "./MenuBtn";
import SearchBtn from "./SearchBtn";
import SearchContent from "./SearchContent";

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

function Header() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <StyledHeader>
      <MainNav />
      <MenuBtn toggleSidebarMenu={() => setIsSidebarOpen(!isSidebarOpen)} />
      <SearchBtn
        toggleSearchModal={() => setIsSearchModalOpen(!isSearchModalOpen)}
      />
      {/* The Search Modal 👇 */}
      <AnimatePresence>
        {isSearchModalOpen && (
          <Modal
            isOpen={isSearchModalOpen}
            onClose={() => {
              setIsSearchModalOpen(false);
              setSearch("");
            }}
          >
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
          <SidebarMenu
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          >
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
