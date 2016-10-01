import now from 'performance-now';
import React, { Component, PropTypes } from 'react';
import Note from './Components/Note';
import Slide from './Components/Slide';
import { List } from 'react-virtualized';
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
      this.setState({
        initializationTime: now() - this._initializationStartedAt
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
        <h1>Performance comparison</h1>
        <h3>react-virtualized <code>List</code></h3>
        {initialized || (
          <button onClick={() => this.setState({ initialized: true })}>
            Create List
          </button>
        )}
        {initialized && (
          <div>
            <p>{Math.round(initializationTime) / 1e3} seconds to create list</p>

            <List
              className='List'
              height={240}
              rowCount={list.length}
              rowHeight={26}
              rowRenderer={({ index, key, style }) => (
                <div
                  className='ListRow'
                  key={index}
                  style={style}
                >
                  {list[index].name}
                </div>
              )}
              width={240}
            />

            <Note>
              Open the browser Timeline view and scroll
            </Note>
          </div>
        )}
      </Slide>
    );
  }
}
