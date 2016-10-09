import { Component, PropTypes } from 'react';

export default class Step extends Component {
  static contextTypes = {
    getDefaultStepIndex: PropTypes.func,
    stepIndex: PropTypes.number
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    exactMatch: PropTypes.bool,
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
    const { children, exactMatch } = this.props;
    const { index } = this.state;

    const match = exactMatch
      ? stepIndex === index
      : stepIndex >= index

    return match
      ? children
      : null
  }
}
