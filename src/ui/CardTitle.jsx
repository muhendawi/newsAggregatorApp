import styled from "styled-components";

const StyledCardTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--color-text-brown-dark);
`;

function CardTitle({ children }) {
  return <StyledCardTitle>{children}</StyledCardTitle>;
}

export default CardTitle;
