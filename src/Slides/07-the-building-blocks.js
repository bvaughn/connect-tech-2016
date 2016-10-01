import React from 'react';
import times from 'lodash.times';
import Slide from './Components/Slide';
import Stepper from './Components/Stepper';
import './07-the-building-blocks.css';

export default () => (
  <Stepper numSteps={5}>
    {(index) => (
      <Slide>
        <h1>
          The building blocks: Grid & Collection
        </h1>

        <div className='Slides__BuildingBlocks'>
          {index >= 1 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>Grid</h3>
              <div className='Slides__BuildingBlocks__Frame'>
                {times(9).map((index) => (
                  <div
                    className='Slides__BuildingBlocks__Grid__Tile'
                    key={index}
                  >
                    cell {index + 1}
                  </div>
                ))}
              </div>
            </div>
          )}

          {index >= 2 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>List</h3>
              <div className='Slides__BuildingBlocks__Frame'>
                {times(4).map((index) => (
                  <div
                    className='Slides__BuildingBlocks__List__Tile'
                    key={index}
                  >
                    row {index + 1}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className='Slides__BuildingBlocks'>
          {index >= 3 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>Table</h3>
              <div className='Slides__BuildingBlocks__Frame'>
                <div className='Slides__BuildingBlocks__Table__Row'>
                  {times(2).map((colIndex) => (
                    <div
                      className='Slides__BuildingBlocks__Table__Column'
                      key={colIndex}
                    >
                      header {colIndex === 0 ? 'a' : 'b'}
                    </div>
                  ))}
                </div>
                {times(4).map((rowIndex) => (
                  <div
                    className='Slides__BuildingBlocks__Table__Row'
                    key={rowIndex}
                  >
                    {times(2).map((colIndex) => (
                      <div
                        className='Slides__BuildingBlocks__Table__Column'
                        key={colIndex}
                      >
                        column {colIndex === 0 ? 'a' : 'b'}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {index >= 4 && (
            <div className='Slides__BuildingBlocks__Block'>
              <h3>Collection</h3>
              <div className='Slides__BuildingBlocks__Frame'>
                <div className='Slides__BuildingBlocks__Collection__Tile Slides__BuildingBlocks__Collection__Tile__1'>
                  1
                </div>
                <div className='Slides__BuildingBlocks__Collection__Tile Slides__BuildingBlocks__Collection__Tile__2'>
                  2
                </div>
                <div className='Slides__BuildingBlocks__Collection__Tile Slides__BuildingBlocks__Collection__Tile__3'>
                  3
                </div>
              </div>
            </div>
          )}
        </div>
      </Slide>
    )}
  </Stepper>
);
