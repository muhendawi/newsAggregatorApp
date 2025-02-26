import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.3;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  gap: 8px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: var(--color-text-green-light);
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <Dot />
      <Dot />
      <Dot />
    </LoaderContainer>
  );
}
