const markup = `function renderList (props) {
  const { sortBy, ...rest } = props

  return (
    <List
      {...rest}
      sortBy={sortBy}
    />
  );
}`;

export default markup;
