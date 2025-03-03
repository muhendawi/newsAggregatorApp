import styled from "styled-components";
import { motion } from "framer-motion";
import useStopScrolling from "../hooks/useStopScrolling";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 3;
`;

const MotionModalOverlay = motion.create(ModalOverlay);

export default function Modal({ children, onClose, isOpen }) {
  useStopScrolling(isOpen);
  return (
    <MotionModalOverlay exit={{ display: "none" }} onClick={onClose}>
      {children}
    </MotionModalOverlay>
  );
}
