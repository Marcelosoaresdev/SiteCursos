// src/components/AnimatedPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

const pageAnimations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageAnimations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.1, ease: 'linear' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;