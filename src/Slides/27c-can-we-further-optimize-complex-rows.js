import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { List } from 'react-virtualized';
import Note from '../Components/Note';
import Slide from '../Components/Slide';
import image from '../../public/profile-picture.jpg';
import '../shared-list-styles.css';
import './27-can-we-further-optimize-complex-rows.css';

export default class DefaultSlide extends Component {
  static contextTypes = {
    list: PropTypes.array
  };

  render () {
    const { list } = this.context;

    return (
      <Slide>
        <h1>Can we further optimize complex rows?</h1>

        <List
          className='List'
          height={300}
          overscanRowCount={2}
          rowCount={list.length}
          rowHeight={80}
          rowRenderer={({ index, isScrolling, key, style }) => (
            <div
              className={classnames('ListRow', {
                ListRowEven: index % 2 === 0,
                ListScrolling: isScrolling
              })}
              key={index}
              style={style}
            >
              {isScrolling && (
                <div className='ImagePlaceholder'></div>
              )}
              {!isScrolling && (
                <img
                  className='Image'
                  role='presentation'
                  src={image}
                />
              )}
              {list[index].name}
            </div>
          )}
          width={240}
        />

        <Note>
          Scroll to see row renderer changes.
        </Note>
      </Slide>
    );
  }
}
