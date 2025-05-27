"use client";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";
import React from "react";

// mask cursor
function FollowCursor() {
  const { variants, cursorVariant } = useMousePosition();

  return (
    <>
      <motion.div id="cursor" variants={variants} animate={cursorVariant} />
    </>
  );
}

export default FollowCursor;
