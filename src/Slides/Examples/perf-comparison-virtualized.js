const markup = `<List
  className='List'
  height={240}
  width={240}
  rowHeight={26}
  rowCount={list.length}
  rowRenderer={
    ({ index, key, style }) => (
      <div
        className='ListRow'
        key={index}
        style={style}
      >
        {list[index].name}
      </div>
    )
  }
/>`;

export default markup;
