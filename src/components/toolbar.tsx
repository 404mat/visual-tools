import { Link } from '@tanstack/react-router';
import { motion } from 'motion/react';

export function Toolbar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-black flex justify-center p-2 gap-4 rounded-full shadow-lg"
    >
      <Link to="/t/color-picker" className="hover:underline px-4 py-1">
        Color Picker
      </Link>
      <Link to="/t/radius-finder" className="hover:underline px-4 py-1">
        Radius Finder
      </Link>
      <Link to="/" className="hover:underline px-4 py-1">
        Home
      </Link>
    </motion.div>
  );
}
