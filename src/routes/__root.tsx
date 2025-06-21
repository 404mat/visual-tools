import {
  createRootRoute,
  Outlet,
  useRouterState,
} from '@tanstack/react-router';
import { AnimatePresence, motion } from 'motion/react';
import { Toolbar } from '../components/toolbar';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const { location } = useRouterState();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname.startsWith('/t') ? 'tools' : 'home'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="p-5"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      {location.pathname.startsWith('/t') && <Toolbar />}
    </>
  );
}
