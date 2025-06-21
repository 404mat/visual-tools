import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Visual Tools</h1>
      <div className="flex justify-center gap-8">
        <Link
          to="/t/color-picker"
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-64"
        >
          <h2 className="text-2xl font-bold mb-2">Color Picker</h2>
          <p>A tool to pick and preview colors.</p>
        </Link>
        <Link
          to="/t/radius-finder"
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow w-64"
        >
          <h2 className="text-2xl font-bold mb-2">Radius Finder</h2>
          <p>A tool to find the radius of circles.</p>
        </Link>
      </div>
    </div>
  );
}
