import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const StyledSearchContent = styled.div`
  margin-top: 8.5rem;
  border-radius: 1rem;
  background-color: var(--color-background-greenish);
  min-width: 300px;
  width: 85dvw;
  height: auto;
  box-shadow: 0 0 5em 0.6rem rgba(0, 0, 0, 0.3);
  /* media query for desktop */
  @media (min-width: 768px) {
    margin-top: 10rem;
    width: 576px;
  }
`;

const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--color-background-secondary);
  background-color: var(--color-background-greenish);
  min-width: 300px;
  width: 85dvw;
  cursor: pointer;
  padding: 0.8rem 1.5rem 0.6rem 1.5rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  color: var(--color-text-greish-light);
  font-size: 1.3rem;
  outline: none;
  &::placeholder {
    color: inherit;
  }
  /* media query for desktop */
  @media (min-width: 768px) {
    width: 576px;
  }
`;

const SearchOptions = styled.div`
  padding: 0.7rem 1.5rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const StyledInput = styled.input`
  cursor: pointer;
  transform: scale(1.2);
  accent-color: var(--color-text-green);
`;
const StyledLabel = styled.label``;

const MotionStyledSearchContent = motion.create(StyledSearchContent);
const MotionSearchOptions = motion.create(SearchOptions);

function SearchContent({ search, setSearch }) {
  return (
    <MotionStyledSearchContent
      initial={{
        opacity: 0,
        scale: 1.2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        scale: 1.2,
      }}
      transition={{ duration: 0.2 }}
      onClick={(e) => e.stopPropagation()}
    >
      <SearchInput
        type="text"
        placeholder="Search..."
        $isSearch={search.trim()}
        autoFocus
        value={search}
        onChange={setSearch}
      />
      <AnimatePresence mode="popLayout">
        <MotionSearchOptions
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.3,
            // type: "spring",
            // stiffness: 100,
            // damping: 10,
          }}
        >
          <StyledLabel id="" />
          <StyledInput type="checkbox" />
        </MotionSearchOptions>
      </AnimatePresence>
    </MotionStyledSearchContent>
  );
}

export default SearchContent;
