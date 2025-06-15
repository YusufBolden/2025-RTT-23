import { useState } from 'react';
import TextInput from '../TextInput/TextInput.jsx';
import StatsDisplay from '../StatsDisplay/StatsDisplay.jsx';

export default function CharacterCounter({ minWords = 0, maxWords = 100 }) {
  const [text, setText] = useState('');

  // Calculate stats from the current text
  const calculateStats = (input) => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const characterCount = input.length;
    const readingTime = (wordCount / 200).toFixed(2); // Average 200 WPM reading speed

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  const stats = calculateStats(text);

  return (
    <div>
      <TextInput onTextChange={setText} />
      <StatsDisplay stats={stats} />
      <p style={{ marginTop: 10 }}>
        Word Goal: {minWords} - {maxWords}
      </p>
    </div>
  );
}
