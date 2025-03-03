import styled from "styled-components";

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
const ErrorMsg = styled.p`
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-green);
  /* media query for desktop */
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
function PageError({ children }) {
  return (
    <Container>
      <ErrorMsg>
        {children}
        <Span>:(</Span>
      </ErrorMsg>
    </Container>
  );
}

export default PageError;
