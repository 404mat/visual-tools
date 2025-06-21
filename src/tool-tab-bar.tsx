import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';

const tools = [
  { name: 'Color Picker', path: '/color-picker', icon: '🎨' },
  { name: 'Radius Finder', path: '/radius-finder', icon: '🟢' },
  // Add more tools here
];

export function ToolTabBar() {
  const { location } = useRouterState();
  return (
    <div className="flex flex-col items-center gap-1">
      <Link
        to="/"
        aria-label="Back to Home"
        className="flex items-center hover:underline underline-offset-2 font-medium text-sm mb-1"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Home
      </Link>
      <nav className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/90 shadow-xl border border-gray-200 backdrop-blur-md min-w-[220px] min-h-[44px]">
        {tools.map((tool) => {
          const isActive = location.pathname === tool.path;
          return (
            <Link
              key={tool.path}
              to={tool.path}
              className={`flex flex-col items-center px-3 py-1 rounded-xl text-xs font-medium transition-colors duration-200 ${isActive ? 'bg-blue-500 text-white shadow' : 'text-gray-700 hover:bg-gray-100'}`}
              style={{ minWidth: 60 }}
            >
              <span className="text-lg mb-0.5">{tool.icon}</span>
              {tool.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
