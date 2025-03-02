import styled from "styled-components";
import PageTitle from "../ui/PageTitle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  align-self: center;
`;
const Span = styled.span`
  display: inline-block;
  rotate: 90deg;
  margin-left: 1rem;
`;
function PageError({ children }) {
  return (
    <Container>
      <PageTitle>
        {children}
        <Span>:(</Span>
      </PageTitle>
    </Container>
  );
}

export default PageError;
