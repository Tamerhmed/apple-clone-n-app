import { motion } from 'framer-motion';

export default function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: '100% 0px -300px 0px' }}
    >
      {children}
    </motion.div>
  );
}
