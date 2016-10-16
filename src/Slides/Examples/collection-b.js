const markup = `function cellSizeAndPositionGetter ({ index }) {
  const item = itemsArray[index]

  return {
    height: item.size,
    width: item.size,
    x: item.left,
    y: item.top
  }
}`;

export default markup;
