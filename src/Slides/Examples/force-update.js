const markup = `class Example extends Component {
  componentDidUpdate (prevProps, prevState) {
    if (this.props.sortBy !== prevProps.sortBy) {
      this._grid.forceUpdate()
    }
  }

  render () {
    return (
      <Grid
        {...this.props}
        ref={(ref) => this._grid = ref}
      />
    )
  }
}`;

export default markup;
