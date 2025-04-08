// components/ContactUs/Heading.jsx
"use client";

import { motion } from "framer-motion";

const Heading = () => (
  <motion.h1
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      opacity: { delay: 0.3, duration: 1 },
      x: { type: "spring", stiffness: 100, damping: 10 },
    }}
    className="text-4xl font-bold text-center"
  >
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="overflow-hidden inline-block text-black"
    >
      ContactUs
    </motion.span>
  </motion.h1>
);

export default Heading;
