import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { AutoSizer, Collection } from 'react-virtualized';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import './39-collection-demo.css';

export default class MySlide extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  constructor (props, context) {
    super(props, context);

    this._cellRenderer = this._cellRenderer.bind(this);
    this._cellSizeAndPositionGetter = this._cellSizeAndPositionGetter.bind(this);
  }

  render () {
    const { list } = this.context;

    return (
      <Stepper numSteps={3}>
        <Slide>
          <h1>Collection demo</h1>

          <p><strong className='QuestionLabel'>Question</strong>: What if your data is more...random? (eg Gantt chart, Pinterest layout)</p>

          <Step>
            <p>
              <strong className='AnswerLabel'>Answer</strong>: Use <code>Collection</code>.
            </p>
          </Step>

          <Step>
            <AutoSizer disableHeight>
              {({ width }) => (
                <Collection
                  cellCount={list.length}
                  cellRenderer={this._cellRenderer}
                  cellSizeAndPositionGetter={this._cellSizeAndPositionGetter}
                  className='Collection'
                  height={300}
                  width={width}
                />
              )}
            </AutoSizer>
          </Step>
        </Slide>
      </Stepper>
    );
  }

  _cellRenderer ({ index, key, style }) {
    const { list } = this.context;

    const datum = list[index];

    // Customize style
    style.backgroundColor = datum.color;

    return (
      <div
        className={classnames('CollectionCell', {
          'CollectionCellCircle': index % 2 === 0
        })}
        key={key}
        style={style}
      >
        {index}
      </div>
    )
  }

  _cellSizeAndPositionGetter ({ index }) {
    const { list } = this.context;

    const datum = list[index];

    return {
      height: datum.size,
      width: datum.size,
      x: datum.left,
      y: datum.top
    }
  }
}
