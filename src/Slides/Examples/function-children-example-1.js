const source = `// Pseudo-code
class WithUser extends Component {
  componentDidMount () {
    fetch('your/api/service')
      .then((user) => this.setState({ user }))
  }

  render () {
    if (this.state.user) {
      return this.props.children(this.state.user)
    }
  }
}`

export default source
