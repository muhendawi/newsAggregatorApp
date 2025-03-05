import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

const StyledSearchContent = styled.div`
  position: relative;
  background-color: var(--color-background-greenish);
  min-width: 300px;
  width: 100dvw;
  height: auto;
  box-shadow: 0 0 5em 0.6rem rgba(0, 0, 0, 0.3);
  overflow: hidden;
  /* media query for desktop */
  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const SearchInput = styled.input`
  position: relative;
  border: none;
  background-color: transparent;
  width: 100%;
  cursor: text;
  padding: 0.8rem 3.2rem 0.6rem 3.4rem;
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
  cursor: pointer;
  color: var(--color-text-greish-light);
  top: 0.95rem;
  left: 1.4rem;
`;

const StyledFiCloseContainer = styled.div`
  display: inline-block;
  position: absolute;
  cursor: pointer;
  color: var(--color-text-greish-light);
  top: 0.95rem;
  right: 1.4rem;
`;
const SearchOptions = styled.div`
  border-top: 1px solid var(--color-text-greyish-dark);
  padding: 0.7rem 1.5rem;
`;

const StyledInput = styled.input`
  cursor: pointer;
  transform: scale(1.1);
  accent-color: var(--color-text-green);
`;
const StyledLabel = styled.label`
  color: var(--color-text-greish-light);
  padding-left: 1.9rem;
`;

const MotionStyledSearchContent = motion.create(StyledSearchContent);
const MotionSearchOptions = motion.create(SearchOptions);
const MotionSearchInput = motion.create(SearchInput);
const MotionStyledFiSearchContainer = motion.create(StyledFiSearchContainer);
const MotionStyledFiCloseContainer = motion.create(StyledFiCloseContainer);

function SearchContent({ search, setSearch, onClose }) {
  const searchInputVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
      transition: { duration: 0.1 },
    },
    transition: { duration: 0.3, delay: 0.1 },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onClose();
    console.log("search Submitted");
  };
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
      <form onSubmit={onSubmit}>
        <MotionSearchInput
          type="text"
          placeholder="Search..."
          $isSearch={search.trim()}
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variants={searchInputVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition="transition"
        />
      </form>
      <MotionStyledFiSearchContainer
        variants={searchInputVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition="transition"
        onClick={onSubmit}
      >
        <FiSearch size={22} />
      </MotionStyledFiSearchContainer>

      <AnimatePresence>
        {search && (
          <>
            <MotionStyledFiCloseContainer
              //   variants={searchInputVariants}
              //   initial="initial"
              //   animate="animate"
              //   exit="exit"
              //   transition="transition"
              initial={{
                y: "-100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setSearch("")}
            >
              <AiFillCloseCircle size={20} />
            </MotionStyledFiCloseContainer>
            <MotionSearchOptions
              initial={{
                y: "-100%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.3 }}
            >
              <StyledLabel id="">Guardian</StyledLabel>
              <StyledInput type="checkbox" />
            </MotionSearchOptions>
          </>
        )}
      </AnimatePresence>
    </MotionStyledSearchContent>
  );
}

export default SearchContent;
