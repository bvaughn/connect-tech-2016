const markup = `// List does not use a sortBy prop
// But specifying it will let shallowCompare know to re-render
<List
  {...rest}
  sortBy={sortBy}
/>`;

export default markup;
