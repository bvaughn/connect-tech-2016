import { Component, PropTypes } from 'react';

export default class Stepper extends Component {
  static contextTypes = {
    previousSlideIndex: PropTypes.number.isRequired,
    registerKeyDownHandler: PropTypes.func,
    slideIndex: PropTypes.number.isRequired,
    unregisterKeyDownHandler: PropTypes.func
  };

  static propTypes = {
    numSteps: PropTypes.number.isRequired
  }

  constructor (props, context) {
    super(props, context);

    const childIndex = context.previousSlideIndex > context.slideIndex
      ? props.numSteps - 1
      : 0

    this.state = {
      childIndex
    };

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

  render() {
    const { childIndex } = this.state;
    const { children } = this.props;

    return children(childIndex);
  }

  _onKeyDown (event) {
    const { childIndex } = this.state;
    const { numSteps } = this.props;

    let newChildIndex = childIndex;

    switch (event.keyCode) {
      case 37: // Left
        newChildIndex = Math.max(childIndex - 1, 0);
        break;
      case 39: // Right
        newChildIndex = Math.min(childIndex + 1, numSteps - 1);
        break;
      default:
        // Linting requires this :)
        break;
    }

    if (childIndex !== newChildIndex) {
      this.setState({
        childIndex: newChildIndex
      });

      return true;
    }
  }
}
