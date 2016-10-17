import React, { Component, PropTypes } from 'react';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import { List } from 'react-virtualized';
import CodeMirror from '../Components/CodeMirror';
import Note from '../Components/Note';
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
      <Stepper numSteps={4}>
        {(index) => (
          <Slide>
            <h1>Drag-and-drop rows</h1>

            {index < 3 && (
              <div>
                <Step index={0}>
                  <p>
                    <strong className='QuestionLabel'>Question</strong>:
                    Is it possible to integrate with another library for drag-and-drop?
                  </p>
                </Step>

                <Step index={1}>
                  <p>
                    <strong className='AnswerLabel'>Answer</strong>:
                    Yes!
                    Use <a href='https://github.com/clauderic/react-sortable-hoc'>react-sortable-hoc</a> with react-virtualized for drag-and-drop.
                  </p>
                </Step>

                <Step index={2}>
                  <div>
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
                    <Note>Click and drag rows above</Note>
                  </div>
                </Step>
              </div>
            )}

            <Step exactMatch index={3}>
              <CodeMirror
                highlightLines={[[0,0], [4,6], [21,23]]}
                source={source}
              />
            </Step>
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
