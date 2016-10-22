import React, { Component, PropTypes } from 'react';
import './SlideshowController.css';

export default class SlideshowController extends Component {
  static childContextTypes = {
    location: PropTypes.any,
    previousSlideIndex: PropTypes.number,
    registerKeyDownHandler: PropTypes.func,
    slideIndex: PropTypes.number,
    unregisterKeyDownHandler: PropTypes.func
  };

  static contextTypes = {
    history: PropTypes.any.isRequired,
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

    this._onHashChange = this._onHashChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._processButtonClick = this._processButtonClick.bind(this);
    this._registerKeyDownHandler = this._registerKeyDownHandler.bind(this);
    this._uregisterKeyDownHandler = this._uregisterKeyDownHandler.bind(this);
  }

  componentDidMount () {
    document.body.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('hashchange', this._onHashChange);

    this._processCurrentLocation();
  }

  componentWillUnmount () {
    document.body.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('hashchange', this._onHashChange);
  }

  getChildContext () {
    const { history } = this.context;
    const { previousSlideIndex, slideIndex } = this.state;

    return {
      location: history.location,
      previousSlideIndex,
      registerKeyDownHandler: this._registerKeyDownHandler,
      slideIndex,
      unregisterKeyDownHandler: this._uregisterKeyDownHandler
    };
  }

  render() {
    const { children } = this.props;

    return (
      <div className='SlideshowController'>
        {children}

        <div className='SlideshowControllerButtons'>
          <button
            className='SlideshowControllerButton'
            onClick={() => this._processButtonClick(-1)}
          >
            &lt;&lt;
          </button>
          <button
            className='SlideshowControllerButton'
            onClick={() => this._processButtonClick(1)}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    );
  }

  _processCurrentLocation () {
    const { history } = this.context;
    const { slideIndex } = this.state;

    const newSlideIndex = parseInt(history.location.pathname.substr(1), 10);

    this.setState({
      previousSlideIndex: slideIndex || 0,
      slideIndex: newSlideIndex
    });
  }

  _processButtonClick (direction) {
    const event = {
      key: direction < 0 ? 'Left' : 'Right',
      keyCode: direction < 0 ? 37 : 39,
      preventDefault: () => {},
      target: {}
    };

    this._onKeyDown(event);
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

  _onHashChange (event) {
    this._processCurrentLocation();
  }

  _onKeyDown (event) {
    const prevented = this._keyDownEventQueue
      .find((handler) => handler(event))

    if (prevented) {
      return;
    }

    const { history, router } = this.context;
    const { slides } = this.props;

    const previousSlideIndex = parseInt(history.location.pathname.substr(1), 10);

    let slideIndex = previousSlideIndex;

    if (event.target.tagName !== 'INPUT') {
      switch (event.keyCode) {
        case 37: // Left
          slideIndex = Math.max(previousSlideIndex - 1, 0)
          break;
        case 13: // Enter
        case 32: // Space
        case 39: // Right
          slideIndex = Math.min(previousSlideIndex + 1, slides.length - 1)
          break;
        default:
          // Linting requires this :)
          break;
      }
    }

    if (slideIndex !== previousSlideIndex) {
      router.transitionTo(`/${slideIndex}`);
    }
  }
}
