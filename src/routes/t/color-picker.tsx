import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/t/color-picker')({
  component: ColorPicker,
});

function ColorPicker() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Color Picker</h2>
      <p>This is the color picker tool. Content to be added.</p>
    </div>
  );
}
