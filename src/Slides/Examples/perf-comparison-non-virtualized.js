const markup = `<div
  className='List'
  style={{
    height: 240,
    width: 240
  }}
>
  {list.map((item, index) => (
    <div
      className='ListRow'
      key={index}
    >
      {item.name}
    </div>
  ))}
</div>`;

export default markup;
