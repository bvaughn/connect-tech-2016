import { Component, PropTypes } from 'react';

export default class SlideshowController extends Component {
  static childContextTypes = {
    previousSlideIndex: PropTypes.number,
    registerKeyDownHandler: PropTypes.func,
    slideIndex: PropTypes.number,
    unregisterKeyDownHandler: PropTypes.func
  };

  static contextTypes = {
    location: PropTypes.any.isRequired,
    router: PropTypes.any.isRequired
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    slides: PropTypes.array.isRequired
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      previousSlideIndex: 0,
      slideIndex: 0
    };

    this._keyDownEventQueue = [];

    this._onKeyDown = this._onKeyDown.bind(this);
    this._registerKeyDownHandler = this._registerKeyDownHandler.bind(this);
    this._uregisterKeyDownHandler = this._uregisterKeyDownHandler.bind(this);
  }

  componentDidMount () {
    document.body.addEventListener('keydown', this._onKeyDown);
  }

  componentWillUnmount () {
    document.body.removeEventListener('keydown', this._onKeyDown);
  }

  getChildContext () {
    const { previousSlideIndex, slideIndex } = this.state;

    return {
      previousSlideIndex,
      registerKeyDownHandler: this._registerKeyDownHandler,
      slideIndex,
      unregisterKeyDownHandler: this._uregisterKeyDownHandler
    };
  }

  render() {
    const { children } = this.props;

    return children;
  }

  _registerKeyDownHandler (handler) {
    this._keyDownEventQueue.push(handler)
  }

  _uregisterKeyDownHandler (handler) {
    this._keyDownEventQueue.splice(
      this._keyDownEventQueue.indexOf(handler),
      1
    );
  }

  _onKeyDown (event) {
    const prevented = this._keyDownEventQueue
      .find((handler) => handler(event))

    if (prevented) {
      return;
    }

    const { location, router } = this.context;
    const { slides } = this.props;

    const previousSlideIndex = parseInt(location.pathname.substr(1), 10);

    let slideIndex = previousSlideIndex;

    switch (event.keyCode) {
      case 37: // Left
        slideIndex = Math.max(previousSlideIndex - 1, 0)
        break;
      case 39: // Right
        slideIndex = Math.min(previousSlideIndex + 1, slides.length - 1)
        break;
      default:
        // Linting requires this :)
        break;
    }

    if (slideIndex !== previousSlideIndex) {
      this.setState({
        previousSlideIndex,
        slideIndex
      });

      router.transitionTo(`/${slideIndex}`);
    }
  }
}
