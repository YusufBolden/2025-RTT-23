export default function StatsDisplay({ stats }) {
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div style={{ marginTop: 10, fontSize: 16 }}>
      <p>Characters: {characterCount}</p>
      <p>Words: {wordCount}</p>
      <p>Estimated Reading Time: {readingTime} minute(s)</p>
    </div>
  );
}
