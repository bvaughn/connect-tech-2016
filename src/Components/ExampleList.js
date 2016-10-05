import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { List } from 'react-virtualized';
import '../shared-list-styles.css';

export default class ExampleList extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  static propTypes = {
    scrollToAlignment: PropTypes.string,
    scrollToIndex: PropTypes.number
  };

  render () {
    const { list } = this.context;
    const { scrollToAlignment, scrollToIndex } = this.props;

    return (
      <List
        className='List'
        height={240}
        overscanRowCount={2}
        rowCount={list.length}
        rowHeight={40}
        rowRenderer={({ index, key, style }) => (
          <div
            className={classnames('ListRow', {
              ListRowEven: index % 2 === 0
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
            {index === scrollToIndex && (
              <i className='fa fa-star RowStar' />
            )}
          </div>
        )}
        scrollToAlignment={scrollToAlignment}
        scrollToIndex={scrollToIndex}
        width={240}
      />
    );
  }
}
