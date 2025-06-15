import CharacterCounter from './components/CharacterCounter/CharacterCounter.jsx';

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: 'auto' }}>
      <h1>Character Counter</h1>
      <CharacterCounter minWords={25} maxWords={100} />
    </div>
  );
}
