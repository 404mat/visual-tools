import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/radius-finder')({
  component: RadiusFinderComponent,
});

function RadiusFinderComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-7">
      <h1 className="text-3xl font-bold mb-4">Radius Finder</h1>
      <p>Find the border-radius of any element. (Demo content)</p>
    </div>
  );
}
