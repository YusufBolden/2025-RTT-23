export default function TextInput({ onTextChange, placeholder = 'Start typing...', initialValue = '' }) {
  return (
    <textarea
      style={{
        width: '100%',
        padding: 10,
        fontSize: 16,
        borderRadius: 4,
        border: '1px solid #ccc',
        resize: 'vertical',
      }}
      rows={6}
      placeholder={placeholder}
      defaultValue={initialValue}
      onChange={(e) => onTextChange(e.target.value)}
    />
  );
}
