import React from 'react';
import Centered from '../Components/Centered'

export default () => (
  <Centered>
    <h1>
      Questions?
    </h1>
    <p>
      slides @ <a href='https://www.github.com/bvaughn/connect-tech-2016'>github.com/bvaughn/connect-tech-2016</a>
    </p>
    <p className='MainSocialContainer'>
      <i className='fa fa-github MainSocialIcon' /> <a href='https://www.github.com/bvaughn'>@bvaughn</a>
      <span className='MainSocialSpacer' />
      <i className='fa fa-twitter MainSocialIcon' /> <a href='https://www.twitter.com/brian_d_vaughn'>@brian_d_vaughn</a>
    </p>
  </Centered>
);
