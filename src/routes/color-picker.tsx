import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/color-picker')({
  component: ColorPickerComponent,
});

function ColorPickerComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-7">
      <h1 className="text-3xl font-bold mb-4">Color Picker</h1>
      <p>Here you can pick and copy colors. (Demo content)</p>
    </div>
  );
}
