import { motion } from "framer-motion";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const StyledSearchContent = styled.div`
  position: relative;
  background-color: var(--color-background-greenish);
  min-width: 300px;
  width: 100dvw;
  height: auto;
  box-shadow: 0 0 5em 0.6rem rgba(0, 0, 0, 0.3);
  /* media query for desktop */
  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const SearchInput = styled.input`
  position: relative;
  border: none;
  border-bottom: 1px solid var(--color-text-greyish-dark);
  background-color: transparent;
  width: 100%;
  cursor: text;
  padding: 0.8rem 1.5rem 0.6rem 3.4rem;
  color: var(--color-text-greish-light);
  font-size: 1.2rem;
  outline: none;
  &::placeholder {
    color: inherit;
    font-size: 1.05rem;
    color: var(--color-text-greyish-dark);
  }
`;

const StyledFiSearchContainer = styled.div`
  display: inline-block;
  position: absolute;
  color: var(--color-text-greish-light);
  top: 0.95rem;
  left: 1.4rem;
`;

const SearchOptions = styled.div`
  padding: 0.7rem 1.5rem;
`;

const StyledInput = styled.input`
  cursor: pointer;
  transform: scale(1.1);
  accent-color: var(--color-text-green);
`;
const StyledLabel = styled.label``;

const MotionStyledSearchContent = motion.create(StyledSearchContent);
const MotionSearchOptions = motion.create(SearchOptions);
const MotionSearchInput = motion.create(SearchInput);
const MotionStyledFiSearchContainer = motion.create(StyledFiSearchContainer);

function SearchContent({ search, setSearch }) {
  return (
    <MotionStyledSearchContent
      initial={{
        y: "-100%",
        borderBottomLeftRadius: "200%",
        borderBottomRightRadius: "200%",
      }}
      animate={{
        y: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
      }}
      exit={{
        y: "-100%",
        borderBottomLeftRadius: "200%",
        borderBottomRightRadius: "200%",
      }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      <MotionSearchInput
        type="text"
        placeholder="Search..."
        $isSearch={search.trim()}
        autoFocus
        value={search}
        onChange={setSearch}
        initial={{
          y: -100,
          opacity: 0,
          borderBottomLeftRadius: "200%",
          borderBottomRightRadius: "200%",
        }}
        animate={{
          y: 0,
          opacity: 1,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        exit={{
          y: -100,
          opacity: 0,
          borderBottomLeftRadius: "200%",
          borderBottomRightRadius: "200%",
          transition: { duration: 0.1 },
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
      />
      <MotionStyledFiSearchContainer
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -100,
          opacity: 0,

          transition: { duration: 0.1 },
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <FiSearch size={22} />
      </MotionStyledFiSearchContainer>
      <MotionSearchOptions
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: -100,
          opacity: 0,
          transition: { duration: 0.1 },
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <StyledLabel id="" />
        <StyledInput type="checkbox" />
      </MotionSearchOptions>
    </MotionStyledSearchContent>
  );
}

export default SearchContent;
