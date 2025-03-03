import styled from "styled-components";
import { RiMenu2Fill } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";

const MotionStyledMenuBtn = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 1.5rem;
  z-index: 2;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transition: all 0.3s;
    scale: 1.1;
  }
  //  media query for desktop
  @media (min-width: 768px) {
    display: none;
  }
`;

function MenuBtn({ toggleSidebarMenu }) {
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const backgroundCColor = useTransform(
    scrollY,
    [0, 90, 100],
    ["transparent", "transparent", "#87968ff7"]
  );
  const textColor = useTransform(
    scrollY,
    [0, 90, 100],
    ["#0d3c26", "#0d3c26", "#f5eadc"]
  );
  const scale = useTransform(
    scrollY,
    [0, 90, 100],
    isMobile ? [1, 1, 1] : [0, 0, 1]
  );
  const padding = useTransform(scrollY, [0, 90, 100], ["0", "0", ".8rem"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0", "50%"]);
  const boxShadow = useTransform(
    scrollY,
    [0, 90, 100],
    ["none", "none", "0 4px 6px rgba(0, 0, 0, 0.2)"]
  );
  const display = useTransform(
    scrollY,
    [0, 30, 100],
    isMobile ? ["flex", "flex", "flex"] : ["none", "none", "flex"]
  );
  return (
    <MotionStyledMenuBtn
      style={{
        backgroundColor: backgroundCColor,
        boxShadow,
        padding,
        borderRadius,
        color: textColor,
        display,
        scale,
      }}
      onClick={toggleSidebarMenu}
    >
      <RiMenu2Fill size={30} />
    </MotionStyledMenuBtn>
  );
}

export default MenuBtn;
