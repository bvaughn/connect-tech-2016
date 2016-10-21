const source = `// Pseudo-code
class WithLocalization extends Component {
  componentDidMount () {
    fetch('your/api/service')
      .then((localization) => this.setState({ localization }))
  }

  render () {
    if (this.state.localization) {
      return this.props.children(this.state.localization)
    }
  }
}`

export default source
