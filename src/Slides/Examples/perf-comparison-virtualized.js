const markup = `const items = [...] // This is our data

function rowRenderer ({ index, key, style }) {
  return (
    <div
      key={index}
      style={style}
    >
      {itemsArray[index].name}
    </div>
  )
}

function renderList () {
  return (
    <List
      height={240}
      width={240}
      rowHeight={26}
      rowCount={itemsArray.length}
      rowRenderer={rowRenderer}
    />
  )
}`;

export default markup;
