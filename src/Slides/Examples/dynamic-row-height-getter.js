const string = `function renderList (listProps) {
  return (
    <List
      rowCount={itemArray.length}
      rowHeight={
        ({ index }) => itemArray[index].type === 'header' ? 20 : 30
      }
      {...listProps}
    />
  )
}`;

export default string;
