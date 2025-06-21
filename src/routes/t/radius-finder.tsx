import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/t/radius-finder')({
  component: RadiusFinder,
});

function RadiusFinder() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Radius Finder</h2>
      <p>This is the radius finder tool. Content to be added.</p>
    </div>
  );
}
