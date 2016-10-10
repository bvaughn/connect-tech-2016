const markup = `function renderList (props) {
  // List does not use a sortBy prop
  // But specifying it will let shallowCompare know to re-render
  return (
    <List
      {...rest}
      sortBy={sortBy}
    />
  );
}`;

export default markup;
