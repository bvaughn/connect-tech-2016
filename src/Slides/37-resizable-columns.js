import React, { Component, PropTypes } from 'react';
import Draggable from 'react-draggable';
import { AutoSizer, defaultTableHeaderRenderer, Table, Column } from 'react-virtualized';
import CodeMirror from '../Components/CodeMirror';
import Slide from '../Components/Slide';
import Stepper from '../Components/Stepper';
import Step from '../Components/Step';
import source from './Examples/resizable-cells-key-points.js';
import './37-resizable-columns.css';

const MIN_COLUMN_WIDTH = 40;

export default class MySlide extends Component {
  static contextTypes = {
    list: PropTypes.array.isRequired
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      flexColumProps: {
        age: {
          width: 100
        },
        name: {
          width: 200
        }
      }
    };

    this._draggableHeaderRenderer = this._draggableHeaderRenderer.bind(this)
    this._rowClassName = this._rowClassName.bind(this)
  }

  componentWillUpdate (nextProps, nextState) {
    if (this.state.cellWidthMap !== nextState.cellWidthMap) {
      const columnIndex = nextState.cellWidthLastChangedIndex;

      this._table.recomputeGridSize({ columnIndex });
    }
  }

  render () {
    const { list } = this.context;
    const { flexColumProps } = this.state;

    return (
      <Stepper numSteps={3}>
        <Slide>
          <h1>Resizable columns</h1>

          <Step exactMatch index={0}>
            <p>
              Connect <a href='https://github.com/mzabriskie/react-draggable/'>react-draggable</a> with <code>Table</code> or <code>Grid</code> for resizable behavior.
            </p>
          </Step>

          <Step exactMatch index={1}>
            <AutoSizer>
              {({ width }) => (
                <div style={{ width }}>
                  <p>Click and drag columns below:</p>

                  <Table
                    className='ResizableTable'
                    columnCount={100}
                    columnWidth={this._getCellWidth}
                    headerClassName='ResizableTableHeaderColumn'
                    headerHeight={40}
                    height={200}
                    ref={(ref) => this._table = ref}
                    rowClassName={this._rowClassName}
                    rowCount={list.length}
                    rowGetter={({ index }) => list[index]}
                    rowHeight={40}
                    width={width}
                  >
                    <Column
                      className='ResizableTableColumn'
                      dataKey='age'
                      headerRenderer={this._draggableHeaderRenderer}
                      label='Age'
                      {...flexColumProps.age}
                    />
                    <Column
                      className='ResizableTableColumn'
                      dataKey='name'
                      headerRenderer={this._draggableHeaderRenderer}
                      label='Name'
                      {...flexColumProps.name}
                    />
                  </Table>
                </div>
              )}
            </AutoSizer>
          </Step>

          <Step exactMatch index={2}>
            <CodeMirror
              highlightLines={[[0,0], [9,12]]}
              source={source}
            />
          </Step>
        </Slide>
      </Stepper>
    );
  }

  _draggableHeaderRenderer (props) {
    return (
      <div className='DragHandleWrapper'>
        {defaultTableHeaderRenderer(props)}

        <Draggable
          axis='x'
          defaultClassName='DragHandle'
          defaultClassNameDragging='DragHandleActive'
          onStop={(event, data) => this._resizeColumn({
            dataKey: props.dataKey,
            deltaX: data.x
          })}
          position={{
            x: 0,
            y: 0
          }}
          zIndex={999}
        >
          <div>
            <svg
              className='DragHandleIcon'
              height={16}
              viewBox='0 0 16 16'
              width={16}
            >
              <path
                d='M20 9H4v2h16V9zM4 15h16v-2H4v2z'
                transform='translate(16.5, 0) rotate(90) scale(.68)'
              />
            </svg>
          </div>
        </Draggable>
      </div>
    );
  }

  _resizeColumn ({ dataKey, deltaX }) {
    const { flexColumProps } = this.state

    // Once a column has been resized, lock its size
    // This prevents an awkward user experience where their resized width is overridden by flex
    const thisColumn = flexColumProps[dataKey]
    thisColumn.flexGrow = 0
    thisColumn.flexShrink = 0
    thisColumn.width = Math.max(MIN_COLUMN_WIDTH, thisColumn.width + deltaX)

    this.setState({
      flexColumProps: {
        ...flexColumProps,
        [dataKey]: thisColumn
      }
    })
  }

  _rowClassName ({ index }) {
    return index === -1
      ? 'ResizableTableHeaderRow'
      : 'ResizableTableRow'
  }
}
