export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
