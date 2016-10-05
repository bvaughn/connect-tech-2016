import { Component, PropTypes } from 'react';

export default class Stepper extends Component {
  static childContextTypes = {
    getDefaultStepIndex: PropTypes.func,
    stepIndex: PropTypes.number
  };

  static contextTypes = {
    previousSlideIndex: PropTypes.number.isRequired,
    registerKeyDownHandler: PropTypes.func,
    slideIndex: PropTypes.number.isRequired,
    unregisterKeyDownHandler: PropTypes.func
  };

  static propTypes = {
    children: PropTypes.any.isRequired,
    numSteps: PropTypes.number.isRequired
  }

  constructor (props, context) {
    super(props, context);

    this.state = {
      childIndex: this._getChildIndexFromContext(props, context)
    };

    this._stepIndex = 0;

    this._getDefaultStepIndex = this._getDefaultStepIndex.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  componentDidMount () {
    const { registerKeyDownHandler } = this.context;

    registerKeyDownHandler(this._onKeyDown);
  }

  componentWillUnmount () {
    const { unregisterKeyDownHandler } = this.context;

    unregisterKeyDownHandler(this._onKeyDown);
  }

  componentWillUpdate (nextProps, nextState, nextContext) {
    const { slideIndex } = this.context;

    if (slideIndex !== nextContext.slideIndex) {
      const childIndex = this._getChildIndexFromContext(nextProps, nextContext);

      if (nextState.childIndex !== childIndex) {
        this.setState({
          childIndex
        });
      }
    }
  }

  getChildContext () {
    const { childIndex } = this.state;

    return {
      getDefaultStepIndex: this._getDefaultStepIndex,
      stepIndex: childIndex
    };
  }

  render() {
    const { childIndex } = this.state;
    const { children } = this.props;

    return typeof children === 'function'
      ? children(childIndex)
      : children
  }

  _getChildIndexFromContext (props, context) {
    return context.previousSlideIndex > context.slideIndex
      ? props.numSteps - 1
      : 0;
  }

  _getDefaultStepIndex () {
    return ++this._stepIndex;
  }

  _onKeyDown (event) {
    const { childIndex } = this.state;
    const { numSteps } = this.props;

    let newChildIndex = childIndex;

    if (event.target.tagName !== 'INPUT') {
      switch (event.keyCode) {
        case 37: // Left
          newChildIndex = Math.max(childIndex - 1, 0);
          break;
        case 13: // Enter
        case 32: // Space
        case 39: // Right
          newChildIndex = Math.min(childIndex + 1, numSteps - 1);
          break;
        default:
          // Linting requires this :)
          break;
      }
    }

    if (childIndex !== newChildIndex) {
      this.setState({
        childIndex: newChildIndex
      });

      return true;
    }
  }
}
