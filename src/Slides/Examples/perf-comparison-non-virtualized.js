const markup = `const items = [...] // This is our data

function rowRenderer ({ item, key }) {
  return (
    <div key={index}>
      {item.name}
    </div>
  )
}

function render () {
  return (
    <div
      style={{
        height: 240,
        width: 240
      }}
    >
      {items.map((item, index) => rowRenderer)}
    </div>
  )
}`;

export default markup;
