import { Component, PropTypes } from 'react';

export default class Step extends Component {
  static contextTypes = {
    getDefaultStepIndex: PropTypes.func,
    stepIndex: PropTypes.number
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number
  };

  constructor (props, context) {
    super(props, context);

    const { getDefaultStepIndex } = context;
    const { index } = props;

    this.state = {
      index: index >= 0
        ? index
        : getDefaultStepIndex()
    };
  }

  render () {
    const { stepIndex } = this.context;
    const { children } = this.props;
    const { index } = this.state;

    return stepIndex >= index
      ? children
      : null
  }
}
