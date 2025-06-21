import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-7">
      <h1 className="text-4xl font-bold mb-8">Welcome to Visual Tools!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ToolCard
          title="Color Picker"
          description="Pick and copy colors easily."
          to="/color-picker"
        />
        <ToolCard
          title="Radius Finder"
          description="Find the border-radius of any element."
          to="/radius-finder"
        />
        {/* Add more ToolCard components here for more tools */}
      </div>
    </div>
  );
}

function ToolCard({
  title,
  description,
  to,
}: {
  title: string;
  description: string;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-400"
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
