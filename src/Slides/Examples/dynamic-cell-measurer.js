const string = `// What is this crazy syntax???
// I'll explain on the next slide!
<CellMeasurer
  cellRenderer={sharedCellRenderer}
  {...otherCellMeasurerProps}
>
  {({ getColumnWidth, getRowHeight }) => (
    <Grid
      columnWidth={getColumnWidth}
      cellRenderer={sharedCellRenderer}
      rowHeight={getRowHeight}
      {...otherGridProps}
    />
  )}
</CellMeasurer>`;

export default string;
