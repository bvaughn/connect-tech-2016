const markup = `function cellRenderer ({ index, key, style }) {
  const datum = list[index]

  return (
    <div
      key={key}
      style={style}
    >
      {datum.name}
    </div>
  )
}

function cellSizeAndPositionGetter ({ index }) {
  const datum = list[index]

  return {
    height: datum.size,
    width: datum.size,
    x: datum.left,
    y: datum.top
  }
}

function renderCollection (props) {
  return (
    <Collection
      cellCount={list.length}
      cellRenderer={cellRenderer}
      cellSizeAndPositionGetter={cellSizeAndPositionGetter}
    />
  )
}`;

export default markup;
