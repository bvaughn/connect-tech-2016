const markup = `function rowRenderer ({ isScrolling, ...rest }) {
  return isScrolling
    ? <LightRow {...rest} />
    : <FullRow {...rest} />
}`;

export default markup;
