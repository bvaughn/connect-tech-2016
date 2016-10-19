import numeral from 'numeral';
import now from 'performance-now';
import React, { Component, PropTypes } from 'react';
import ExampleList from '../Components/ExampleList';
import Note from '../Components/Note';
import Slide from '../Components/Slide';

export default class Stepper extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      formattedListSize: numeral(context.list.length).format(),
      initializationTime: 0,
      initialized: false,
      useBorderRadius: false
    };
  }

  componentDidUpdate (prevProps, prevState) {
    const { initialized } = this.state;

    if (initialized && !prevState.initialized) {
      window.requestIdleCallback(() => {
        this.setState({
          initializationTime: now() - this._initializationStartedAt
        });
      });
    }
  }

  componentWillUpdate (nextProps, nextState) {
    const { initialized } = this.state;

    if (nextState.initialized && !initialized) {
      this._initializationStartedAt = now();
    }
  }

  render () {
    const { formattedListSize, initializationTime, initialized, useBorderRadius } = this.state;

    return (
      <Slide>
        <h1>How much can windowing improve performance?</h1>
        <h3>Rendering the same list with windowing</h3>
        {initialized || (
          <button onClick={() => this.setState({ initialized: true })}>
            Create List
          </button>
        )}
        {initialized && (
          <div>
            {initializationTime === 0 && (
              <Note>
                Creating List ...
              </Note>
            )}
            {initializationTime > 0 && (
              <Note type='warning'>
                Created list in {Math.round(initializationTime) / 1e3} seconds ({formattedListSize} items)
              </Note>
            )}

            <ExampleList className={useBorderRadius ? 'ListWithBorderRadius' : null} />

            <Note>
              Open the browser Timeline view and scroll
            </Note>

            <p>
              <label>
                <input
                  checked={useBorderRadius}
                  onChange={() => this.setState({
                    useBorderRadius: this._checkbox.checked
                  })}
                  ref={(ref) => this._checkbox = ref}
                  type='checkbox'
                /> Trigger repaints on scroll?
              </label>
            </p>
          </div>
        )}
      </Slide>
    );
  }
}
