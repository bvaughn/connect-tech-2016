import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { List } from 'react-virtualized';
import '../shared-list-styles.css';

export default class ExampleList extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  static propTypes = {
    className: PropTypes.string,
    scrollToAlignment: PropTypes.string,
    scrollToIndex: PropTypes.number
  };

  render () {
    const { list } = this.context;
    const { className, scrollToAlignment, scrollToIndex } = this.props;

    return (
      <List
        className={classnames('List', className)}
        height={240}
        overscanRowCount={2}
        rowCount={list.length}
        rowHeight={40}
        rowRenderer={({ index, key, style }) => (
          <div
            className={classnames('ListRow', {
              ListRowActived: index === scrollToIndex
            })}
            key={index}
            style={style}
          >
            <div
              className='RowNumber'
              style={{
                backgroundColor: list[index].color
              }}
            >
              {list[index].name.substr(0, 1)}
            </div>
            <div className='RowStack'>
              <div className='RowName'>{list[index].name}</div>
              <div className='RowRowNumber'>This is row {index}</div>
            </div>
          </div>
        )}
        scrollToAlignment={scrollToAlignment}
        scrollToIndex={scrollToIndex}
        width={240}
      />
    );
  }
}
