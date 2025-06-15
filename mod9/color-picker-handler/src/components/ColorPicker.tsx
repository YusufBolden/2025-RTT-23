import React, { useState } from 'react';
import ColorInput from './ColorInput';


const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('white');
  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };
  return (
    <div>
      <ColorInput onColorChange={handleColorChange} />
      <div
        className="h-32 w-full rounded shadow"
        style={{ backgroundColor: color }}
      >
        <p className="text-center pt-12 font-semibold text-gray-700">
          Current Color: {color}
        </p>
      </div>
    </div>
  );
};
export default ColorPicker;