import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen">
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
  notFoundComponent: () => (
    <div className="flex flex-col items-center justify-center h-full text-center gap-7">
      <p className="font-extrabold text-8xl tracking-widest">404</p>
    </div>
  ),
});
