import now from 'performance-now';
import React, { Component, PropTypes } from 'react';
import Note from './Components/Note';
import Slide from './Components/Slide';
import './07-shared.css';

export default class Stepper extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      initializationTime: 0,
      initialized: false
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
    const { list } = this.context;
    const { initializationTime, initialized } = this.state;

    return (
      <Slide>
        <h1>How does windowing impact performance?</h1>
        <h3>Vanilla React (no windowing)</h3>
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

            <div className='List'>
              {list.map((item, index) => (
                <div
                  className='ListRow'
                  key={index}
                >
                  {item.name}
                </div>
              ))}
            </div>

            <Note>
              Open the browser Timeline view and scroll
            </Note>
          </div>
        )}
      </Slide>
    );
  }
}
