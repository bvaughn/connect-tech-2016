const string = `// This is our list data
const collection = [...]

function render (listProps) {
  return (
    <CellMeasurer {...listProps}>
      {({ getColumnWidth, getRowHeight }) => (
        <Grid
          columnWidth={getColumnWidth}
          rowHeight={getRowHeight}
          {...listProps}
        />
      )}
    </CellMeasurer>
  );
}`;

export default string;
