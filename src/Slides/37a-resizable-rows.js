import Immutable from 'immutable';
import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import { List } from 'react-virtualized';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import SvgWrapper from '../Components/SvgWrapper';
import './37-resizable-rows.css';

export default class MySlide extends Component {
  static contextTypes = {
    list: PropTypes.array.isRequired
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      rowHeights: Immutable.Map()
    };

    this._rowRenderer = this._rowRenderer.bind(this)
    this._rowHeight = this._rowHeight.bind(this)
  }

  componentWillUpdate (nextProps, nextState) {
    const { rowHeights } = this.state;

    if (rowHeights !== nextState.rowHeights) {
      this._list.recomputeRowHeights(0);
    }
  }

  render () {
    const { list } = this.context;

    return (
      <Stepper numSteps={3}>
        <Slide>
          <h1>Resizable rows</h1>

          <p>
            <strong className='QuestionLabel'>Question</strong>:
            Can rows and columns be resizable?
          </p>

          <Step index={1}>
            <p>
              <strong className='AnswerLabel'>Answer</strong>:
              Yes!
              Use <a href='https://github.com/mzabriskie/react-draggable/'>react-draggable</a> with react-virtualized for resizable rows.
            </p>
          </Step>

          <Step exactMatch index={2}>
            <List
              className='List'
              height={300}
              overscanRowCount={2}
              ref={(ref) => this._list = ref}
              rowCount={list.length}
              rowHeight={this._rowHeight}
              rowRenderer={this._rowRenderer}
              width={240}
            />
          </Step>
        </Slide>
      </Stepper>
    );
  }

  _rowHeight ({ index }) {
    const { rowHeights } = this.state;

    return rowHeights.get(index, 40);
  }

  _rowRenderer ({ index, isScrolling, key, style }) {
    const { list } = this.context;

    return (
      <div
        className='ResizableListRow'
        key={index}
        style={style}
      >
        {list[index].name}

        <Draggable
          axis='y'
          defaultClassName='DragHandle'
          defaultClassNameDragging='DragHandleActive'
          onStop={(event, data) => this._resizeRow({
            deltaY: data.y,
            index: index
          })}
          position={{
            x: 0,
            y: 0
          }}
          zIndex={999}
        >
          <div className='DragHandleIcon'>
            <SvgWrapper
              height={24}
              width={24}
              viewBoxHeight={24}
              viewBoxWidth={24}
            >
              <defs>
                <path d='M0 0h24v24H0V0z' id='a'/>
              </defs>
              <clipPath id='b'>
                <use overflow='visible' href='#a'/>
              </clipPath>
              <path clipPath='url(#b)' d='M20 9H4v2h16V9zM4 15h16v-2H4v2z'/>
            </SvgWrapper>
          </div>
        </Draggable>
      </div>
    );
  }

  _resizeRow ({ deltaY, index }) {
    const { rowHeights } = this.state;
    let rowHeight = rowHeights.get(index, 40);
    rowHeight = Math.max(30, Math.min(100, rowHeight + deltaY));

    this.setState({
      rowHeights: rowHeights.set(index, rowHeight)
    });
  }
}
