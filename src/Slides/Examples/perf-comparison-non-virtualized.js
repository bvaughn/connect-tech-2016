const markup = `const items = [...] // This is our data

function render () {
  return (
    <div
      style={{
        height: 240,
        width: 240
      }}
    >
      {items.map((item, index) => (
        <div key={index}>
          {item.name}
        </div>
      ))}
    </div>
  )
}`;

export default markup;
