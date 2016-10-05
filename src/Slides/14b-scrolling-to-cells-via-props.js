import React, { Component } from 'react';
import { Radio, RadioGroup } from 'react-radio-group';
import ExampleList from '../Components/ExampleList';
import Slide from '../Components/Slide';

export default class MySlide extends Component {
  constructor (props, context) {
    super(props, context);

    this.state = {
      scrollToAlignment: 'auto',
      scrollToIndex: 0
    };
  }

  render () {
    const { scrollToAlignment, scrollToIndex } = this.state;

    return (
      <Slide>
        <h1>Scrolling to cells via props</h1>

        <p>
          <code>scrollToAlignment</code> <RadioGroup
            Component='span'
            name='scrollToAlignment'
            onChange={(scrollToAlignment) => this.setState({ scrollToAlignment })}
            selectedValue={scrollToAlignment}
          >
            <Radio value='auto' /> Auto (default)
            <Radio value='center' /> Center
            <Radio value='end' /> End
            <Radio value='start' /> Start
          </RadioGroup>
        </p>

        <p>
          <code>scrollToIndex</code> <input
            onChange={() => this.setState({
              scrollToIndex: parseInt(this._input.value, 10)
            })}
            ref={(ref) => this._input = ref}
            type='number'
            value={scrollToIndex}
          />
        </p>

        <ExampleList
          scrollToAlignment={scrollToAlignment}
          scrollToIndex={scrollToIndex}
        />
      </Slide>
    );   
  }
}
