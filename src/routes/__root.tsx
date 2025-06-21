import {
  createRootRoute,
  Outlet,
  useRouterState,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ToolTabBar } from '../tool-tab-bar';
import { motion, AnimatePresence } from 'motion/react';

function RootComponent() {
  const { location } = useRouterState();
  const isToolRoute = /^\/(color-picker|radius-finder)/.test(location.pathname);
  return (
    <div className="h-screen pb-16 relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={isToolRoute ? 'tools' : 'welcome'}
          initial={{ opacity: 0, y: isToolRoute ? 40 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: isToolRoute ? -40 : 40 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        {isToolRoute && (
          <motion.div
            key="tabbar"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="fixed left-1/2 bottom-6 -translate-x-1/2 z-50"
            style={{ pointerEvents: 'auto' }}
          >
            <ToolTabBar />
          </motion.div>
        )}
      </AnimatePresence>
      <TanStackRouterDevtools />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center h-full text-center gap-7">
      <p className="font-extrabold text-8xl tracking-widest">404</p>
    </div>
  ),
});
