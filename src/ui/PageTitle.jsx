import styled from "styled-components";

const PageTitle = styled.h1`
  text-align: center;
  margin: 0;
  padding: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text-green);
  /* media query for desktop */
  @media (min-width: 768px) {
    font-size: 3rem;
    padding-top: 1rem;
  }
`;
export default PageTitle;
