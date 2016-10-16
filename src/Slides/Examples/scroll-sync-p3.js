const markup = `function cellRendererBody ({ columnIndex, key, rowIndex, style }) {
  const { cellValues } = this.state;

  return (
    <input
      key={key}
      onChange={(event) => {
        this.setState({
          cellValues: cellValues.set(key, event.target.value)
        })
      }}
      onFocus={() => this.setState({
        focusedColumnIndex: columnIndex,
        focusedRowIndex: rowIndex
      })}
      style={style}
      value={cellValues.get(key, '')}
    />
  );
}`;

export default markup;
