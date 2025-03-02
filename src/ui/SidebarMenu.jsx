import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import styled from "styled-components";

const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 2rem 0;
  margin: 0;
  width: 300px;
  height: 100dvh;
  background-color: var(--color-background-green-solid);
  box-shadow: 1em 0 10em rgba(0, 0, 0, 0.4);
  @media (min-width: 768px) {
    min-width: 400px;
  }
`;
const FiXContainer = styled.div`
  cursor: pointer;
  align-self: flex-end;
  margin-right: 2.5rem;
  display: flex;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: var(--color-text-greish-light);
  color: var(--color-background-green-solid);
`;

// Converting Styled components into Motion Styled Components
const MotionSidebarContent = motion.create(SidebarContent);
const MotionSidebarOverlay = motion.create(SidebarOverlay);
const MotionFixContainer = motion.create(FiXContainer);

function SidebarMenu({ onClose, children }) {
  return (
    <MotionSidebarOverlay exit={{ display: "none" }} onClick={onClose}>
      <MotionSidebarContent
        initial={{
          x: "-100%",
          borderTopRightRadius: "150%",
          borderBottomRightRadius: "150%",
        }}
        animate={{
          x: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
        exit={{
          x: "-100%",
          borderTopRightRadius: "150%",
          borderBottomRightRadius: "150%",
        }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        <MotionFixContainer
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: -200, transition: { duration: 0.1 } }}
          transition={{
            duration: 0.3,
            delay: 0.2,
          }}
          onClick={onClose}
        >
          <FiX size={30} />
        </MotionFixContainer>
        {children}
      </MotionSidebarContent>
    </MotionSidebarOverlay>
  );
}

export default SidebarMenu;
