import React, { Component } from 'react';
import { Radio, RadioGroup } from 'react-radio-group';
import ExampleList from '../Components/ExampleList';
import Slide from '../Components/Slide';
import Step from '../Components/Step';
import Stepper from '../Components/Stepper';

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
      <Stepper numSteps={4}>
        <Slide>
          <h1>Scrolling to a row via props</h1>

          <p>Controlled by 2 simple properties:</p>

          <ul>
            <Step>
              <li>
                <code>scrollToAlignment</code> <RadioGroup
                  Component='span'
                  name='scrollToAlignment'
                  onChange={(scrollToAlignment) => this.setState({ scrollToAlignment })}
                  selectedValue={scrollToAlignment}
                >
                  <Radio value='auto' /> "auto" (default)
                  <Radio value='center' /> "center"
                  <Radio value='end' /> "end"
                  <Radio value='start' /> "start"
                </RadioGroup>
              </li>
            </Step>

            <Step>
              <li>
                <code>scrollToIndex</code> <input
                  onChange={() => this.setState({
                    scrollToIndex: parseInt(this._input.value, 10)
                  })}
                  ref={(ref) => this._input = ref}
                  type='number'
                  value={scrollToIndex}
                />
              </li>
            </Step>
          </ul>

          <Step>
            <ExampleList
              scrollToAlignment={scrollToAlignment}
              scrollToIndex={scrollToIndex}
            />
          </Step>
        </Slide>
      </Stepper>
    );   
  }
}
