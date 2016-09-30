const markup = `// Example item renderer for List
function rowRenderer ({ key, index, style}) {
  const item = list[index]

  return (
    <div
      key={key}
      style={style}
    >
      {item.name}
    </div>
  )
}`;

export default markup;
