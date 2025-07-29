import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });


  return {
    ref,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    transition: { duration: 0.6, ease: 'easeOut' },
  };
};
