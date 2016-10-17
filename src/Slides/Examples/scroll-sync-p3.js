const markup = `function cellRendererBody ({ columnIndex, key, rowIndex, style }) {
  return (
    <input
      key={key}
      onChange={
        (event) => updateCellValue(key, event.target.value)
      }
      onFocus={
        () => updateSelectedCell({ columnIndex, rowIndex })
      }
      style={style}
      value={getCellValue(key)}
    />
  );
}`;

export default markup;
