const markup = `const items = [...] // This is our data

function rowRenderer ({ index, key, style }) {
  return (
    <div
      key={index}
      style={style}
    >
      {items[index].name}
    </div>
  )
}

function render () {
  return (
    <List
      height={240}
      width={240}
      rowHeight={26}
      rowCount={items.length}
      rowRenderer={rowRenderer}
    />
  )
}`;

export default markup;
