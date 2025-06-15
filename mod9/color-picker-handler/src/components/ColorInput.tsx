import React from 'react';
type ColorInputProps = {
  onColorChange: (color: string) => void;
};
const ColorInput: React.FC<ColorInputProps> = ({ onColorChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onColorChange(event.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Enter a color"
      style={{
        padding: '8px',
        width: '100%',
        marginBottom: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontSize: '16px'
      }}
    />
  );
};
export default ColorInput;