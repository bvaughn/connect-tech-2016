const markup = `function renderSpreadsheet (gridProps) {
  return (
    <ScrollSync>
      {({ onScroll, scrollLeft, scrollTop }) => (
        <AutoSizer disableHeight>
          {({ width }) => (
            <div className='Container'>
              <Grid
                {...gridProps}
                cellRenderer={cellRendererFixed}
                className='LeftGrid'
                columnCount={1}
                scrollTop={scrollTop}
              />
              <Grid
                {...gridProps}
                cellRenderer={cellRendererFixed}
                className='HeaderGrid'
                rowCount={1}
                scrollLeft={scrollLeft}
              />
              <Grid
                {...gridProps}
                cellRenderer={cellRendererBody}
                className='BodyGrid'
                onScroll={onScroll}
              />
            </div>
          )}
        </AutoSizer>
      )}
    </ScrollSync>
  );
}`;

export default markup;
