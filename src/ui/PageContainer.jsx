import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  width: 100%;
  padding: 0 0.5rem;
  /* media query for desktop */
  @media (min-width: 768px) {
    /* border: 1px solid var(--color-text-brown-dark); */
  }
`;

export default PageContainer;
