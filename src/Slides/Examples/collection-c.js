const markup = `function cellRenderer ({ index, key, style }) {
  return (
    <div
      key={key}
      style={style}
    >
      {itemsArray[index].name}
    </div>
  )
}`;

export default markup;
