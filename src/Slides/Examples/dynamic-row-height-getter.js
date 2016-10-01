const string = `function rowHeight ({ index }) {
  return collection[index].size
}

<List
  rowCount={collection.length}
  rowHeight={rowHeight}
  {...otherListProps}
/>`;

export default string;
