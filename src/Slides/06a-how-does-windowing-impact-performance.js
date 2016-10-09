import classnames from 'classnames';
import now from 'performance-now';
import React, { Component, PropTypes } from 'react';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import '../shared-list-styles.css';

export default class Stepper extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

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
    const { list } = this.context;
    const { initializationTime, initialized, useBorderRadius } = this.state;

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

            <div className={classnames('List', {
              'ListWithBorderRadius': useBorderRadius
            })}>
              {list.map((item, index) => (
                <div
                  className={classnames('ListRow', {
                    ListRowEven: index % 2 === 0
                  })}
                  key={index}
                >
                  <div
                    className='RowNumber'
                    style={{
                      backgroundColor: item.color
                    }}
                  >
                    {item.name.substr(0, 1)}
                  </div>
                  <div className='RowStack'>
                    <div className='RowName'>{item.name}</div>
                    <div className='RowRowNumber'>This is row {index}</div>
                  </div>
                </div>
              ))}
            </div>

            <Note>
              Scrolling performance poor if repaints are triggered
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
