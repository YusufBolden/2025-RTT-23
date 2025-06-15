import React from 'react';
import ColorPicker from './components/ColorPicker';
const App: React.FC = () => {
  return (
    <div>
        <h1 style={{ marginBottom: '20px', fontSize: '24px' }}>Color Picker</h1>
        <ColorPicker />
      </div>
  );
};
export default App;