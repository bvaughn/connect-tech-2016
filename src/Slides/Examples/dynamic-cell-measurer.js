const string = `function render (listProps) {
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
