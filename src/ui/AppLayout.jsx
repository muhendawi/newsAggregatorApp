import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const StyledAppLayout = styled.div`
  position: relative;
`;
const StyledMain = styled.main`
  overflow: scroll;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <div>Pagination</div>
    </StyledAppLayout>
  );
}

export default AppLayout;
