import styled from "styled-components";
import PageTitle from "../ui/PageTitle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
`;
const Span = styled.span`
  display: inline-block;
  rotate: 90deg;
  margin-left: 1rem;
`;
function PageNotFound() {
  return (
    <Container>
      <PageTitle>
        Page Not Found <Span>:(</Span>
      </PageTitle>
    </Container>
  );
}

export default PageNotFound;
