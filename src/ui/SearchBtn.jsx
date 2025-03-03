import { motion, useScroll, useTransform } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const SearchBtnContainer = styled.div`
  position: fixed;
  top: 2rem;
  right: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  z-index: 2;
  &:hover > svg {
    transition: all 0.3s;
    scale: 1.1;
  }
`;

const MotionSearchContainer = motion.create(SearchBtnContainer);

function SearchBtn({ toggleSearchModal }) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 90, 100],
    ["transparent", "transparent", "#87968ff7"]
  );
  const textColor = useTransform(
    scrollY,
    [0, 80, 100],
    ["#0d3c26", "#0d3c26", "#f5eadc"]
  );
  const padding = useTransform(scrollY, [0, 90, 100], ["0", "0", "1rem"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0", "50%"]);
  const boxShadow = useTransform(
    scrollY,
    [0, 90, 100],
    ["none", "none", "0 4px 6px rgba(0, 0, 0, 0.2)"]
  );
  return (
    <MotionSearchContainer
      style={{
        backgroundColor,
        boxShadow,
        padding,
        borderRadius,
        color: textColor,
      }}
      onClick={toggleSearchModal}
    >
      <FiSearch size={30} />
    </MotionSearchContainer>
  );
}

export default SearchBtn;
