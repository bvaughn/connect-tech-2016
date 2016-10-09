import now from 'performance-now';
import React, { Component } from 'react';
import ExampleList from '../Components/ExampleList';
import Note from '../Components/Note';
import Slide from '../Components/Slide';

export default class Stepper extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
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
    const { initializationTime, initialized, useBorderRadius } = this.state;

    return (
      <Slide>
        <h1>How does windowing impact performance?</h1>
        <h3>With react-virtualized (<code>List</code> component)</h3>
        {initialized || (
          <button onClick={() => this.setState({ initialized: true })}>
            Create List
          </button>
        )}
        {initialized && (
          <div>
            <button disabled>
              Created List
            </button>

            {initializationTime > 0 && (
              ` in ${Math.round(initializationTime) / 1e3} seconds`
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
