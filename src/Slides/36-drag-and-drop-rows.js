import React, { Component, PropTypes } from 'react';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import { List } from 'react-virtualized';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import source from './Examples/drag-and-drop-key-points.js';
import './36-drag-and-drop-rows.css';

// Connect react-virtualized and react-sortable-hoc
const SortableList = SortableContainer(List, {
  withRef: true
});
const SortableRow = SortableElement(({ children }) => children);

export default class MySlide extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      listIndices: context.list.map((item, index) => index)
    };

    this._onSortEnd = this._onSortEnd.bind(this)
    this._rowRenderer = this._rowRenderer.bind(this)
  }

  render () {
    const { list } = this.context;

    return (
      <Stepper numSteps={3}>
        <Slide>
          <h1>Drag-and-drop rows</h1>

          <Step exactMatch index={0}>
            <p>
              Connect <a href='https://github.com/clauderic/react-sortable-hoc'>react-sortable-hoc</a> with <code>List</code>, <code>Table</code>, or <code>Grid</code> for drag and drop behavior.
            </p>
          </Step>

          <Step exactMatch index={1}>
            <div>
              <p>Click and drag rows below:</p>
              <SortableList
                className='List'
                height={240}
                helperClass='SortableListRowActive'
                onSortEnd={this._onSortEnd}
                overscanRowCount={2}
                rowCount={list.length}
                rowHeight={40}
                rowRenderer={this._rowRenderer}
                width={240}
              />
            </div>
          </Step>

          <Step exactMatch index={2}>
            <CodeMirror
              highlightLines={[[0,0], [4,6], [21,23]]}
              source={source}
            />
          </Step>
        </Slide>
      </Stepper>
    );
  }

  _onSortEnd ({ newIndex, oldIndex }) {
    const { list } = this.context;

    if (newIndex === oldIndex) {
      return;
    }

    arrayMove(list, oldIndex, newIndex);

    this.forceUpdate(); // Re-render
  }

  _rowRenderer ({ index, key, style }) {
    const { list } = this.context;

    return (
      <div
        key={index}
        style={style}
      >
        <SortableRow index={index}>
          <div className='ListRow SortableListRow'>
            {list[index].name}
          </div>
        </SortableRow>
      </div>
    );
  }
}
