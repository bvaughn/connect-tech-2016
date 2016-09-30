import { Component, PropTypes } from 'react';

export default class SlideshowController extends Component {
  static contextTypes = {
    location: PropTypes.any.isRequired,
    router: PropTypes.any.isRequired
  };

  static propTypes = {
    slides: PropTypes.array.isRequired
  }

  constructor (props, context) {
    super(props, context)

    this._onKeyDown = this._onKeyDown.bind(this)
  }

  componentDidMount () {
    document.body.addEventListener('keydown', this._onKeyDown)
  }

  componentWillUnmount () {
    document.body.removeEventListener('keydown', this._onKeyDown)
  }

  render() {
    return null;
  }

  _onKeyDown (event) {
    const { location, router } = this.context;
    const { slides } = this.props;

    const index = parseInt(location.pathname.substr(1), 10);

    let pathname;

    switch (event.keyCode) {
      case 37: // Left
        pathname = `/${Math.max(index - 1, 0)}`
        break;
      case 39: // Right
        pathname = `/${Math.min(index + 1, slides.length - 1)}`
        break;
      default:
        // Linting requires this :)
        break;
    }

    if (
      pathname &&
      pathname !== location.pathname
    ) {
      router.transitionTo(pathname);
    }
  }
}
