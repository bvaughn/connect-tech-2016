import React, { Component } from 'react';
import { HashRouter, Match, Redirect } from 'react-router';
import SlideshowController from './SlideshowController';
import './App.css';

// Load all slides in the Slides folder
const slides = require.context('./Slides/', false, /\.js$/)
  .keys()
  .map((filename) => filename.replace('./', ''))
  .map((filename) => require(`./Slides/${filename}`).default);

export default class App extends Component {
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
          </div>
        </SlideshowController>
      </HashRouter>
    );
  }
}
