import React, { Component, PropTypes } from 'react';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import { List } from 'react-virtualized';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import source from './Examples/drag-and-drop-key-points.js';
import './46-drag-and-drop-rows.css';

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
        {(index) => (
          <Slide>
            <h1>Drag-and-drop rows</h1>

            <p>
              Connect <a href='https://github.com/clauderic/react-sortable-hoc'>react-sortable-hoc</a> with <code>List</code>, <code>Table</code>, or <code>Grid</code> for drag and drop behavior.
            </p>

            {index === 1 && (
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
            )}

            {index === 2 && (
              <CodeMirror source={source} />
            )}
          </Slide>
        )}
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
