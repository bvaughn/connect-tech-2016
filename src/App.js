import React, { Component, PropTypes } from 'react';
import { HashRouter, Match, Redirect } from 'react-router';
import NavigateToSlide from './Components/NavigateToSlide';
import SlideshowController from './Components/SlideshowController';
import generateRandomList from './Utils/generateRandomList';
import './App.css';

// Load all slides in the Slides folder
const filenames = require.context('./Slides/', false, /\.js$/)
  .keys()
  .map((filename) => filename.replace('./', ''));
const slides = filenames.map((filename) => require(`./Slides/${filename}`).default);

// Test data for use in performance examples
const list = generateRandomList();

export default class App extends Component {
  static childContextTypes = {
    list: PropTypes.array.isRequired
  };

  getChildContext () {
    return {
      list
    };
  }

  render() {
    return (
      <HashRouter>
        <SlideshowController slides={slides}>
          <div className='App'>
            {slides.map((Component, index) => (
              <Match
                component={Component}
                key={index}
                pattern={`/${index}`}
              />
            ))}

            <Match
              exactly
              pattern='/'
              render={() => (
                <Redirect to='0' />
              )}
            />

            <NavigateToSlide filenames={filenames} />
          </div>
        </SlideshowController>
      </HashRouter>
    );
  }
}
