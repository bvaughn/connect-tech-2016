import React, { Component, PropTypes } from 'react';
import './NavigateToSlide.css';

export default class NavigateToSlide extends Component {
  static contextTypes = {
    registerKeyDownHandler: PropTypes.func,
    router: PropTypes.any.isRequired,
    unregisterKeyDownHandler: PropTypes.func,
    slideIndex: PropTypes.number
  };

  static propTypes = {
    filenames: PropTypes.array.isRequired
  };

  constructor (props, context) {
    super(props, context);

    this.state = {
      active: false
    };

    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);;
  }

  componentDidMount () {
    const { registerKeyDownHandler } = this.context;

    registerKeyDownHandler(this._onKeyDown);
  }

  componentWillUnmount () {
    const { unregisterKeyDownHandler } = this.context;

    unregisterKeyDownHandler(this._onKeyDown);
  }

  render () {
    const { slideIndex } = this.context;
    const { filenames } = this.props;
    const { active } = this.state;

    if (!active) {
      return null;
    }

    return (
      <div className='NavigateToSlideOverlay'>
        <div className='NavigateToSlide'>
          <select
            onChange={this._onChange}
            ref={(ref) => this._select = ref}
            value={slideIndex}
          >
            {filenames.map((filename, index) => (
              <option
                key={index}
                value={index}
              >
                {filename
                    .replace(/^[^-]+-/g, '')
                    .replace(/-/g, ' ')
                    .replace(/\.js$/g, '')}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  _onChange (event) {
    const { router } = this.context;

    let slideIndex = this._select.value;

    this.setState({
      active: false
    });

    router.transitionTo(`/${slideIndex}`);
  }

  _onKeyDown (event) {
    switch (event.key) {
      case 't':
        this.setState({
          active: true
        });

        event.preventDefault();

        return true;
      case 'Escape':
        this.setState({
          active: false
        });

        return true;
      default:
        // Linting requires this :)
        break;
    }
  }
}
