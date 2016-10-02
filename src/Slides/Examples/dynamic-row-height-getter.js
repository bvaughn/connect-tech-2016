const string = `// This is our list data
const collection = [...]

// This tells List the height of each item / row
function rowHeight ({ index }) {
  return collection[index].size
}

function render (listProps) {
  return (
    <List
      rowCount={collection.length}
      rowHeight={rowHeight}
      {...listProps}
    />
  )
}`;

export default string;
