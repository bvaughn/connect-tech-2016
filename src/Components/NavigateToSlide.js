import React, { Component, PropTypes } from 'react';
import Select from 'react-virtualized-select';
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
      active: false,
      options: this._filenamesToOptions(props.filenames)
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

  componentWillUpdate (nextProps, nextState) {
    const { filenames } = this.props;

    if (filenames !== nextProps.filenames) {
      this.setState({
        options: this._filenamesToOptions(nextProps.filenames)
      })
    }
  }

  render () {
    const { slideIndex } = this.context;
    const { active, options } = this.state;

    if (!active) {
      return null;
    }

    return (
      <div className='NavigateToSlideOverlay'>
        <div className='NavigateToSlide'>
          <Select
            autofocus
            className='VirtualizedSelect'
            clearable={false}
            options={options}
            onChange={this._onChange}
            value={slideIndex}
          />
        </div>
      </div>
    );
  }

  _filenamesToOptions (filenames) {
    return filenames
      .map((filename, index) => ({
        label: filename
          .replace(/^[^-]+-/g, '')
          .replace(/\.js$/g, '')
          .replace(/-/g, ' '),
        value: index
      }))
      .filter((option, index, options) => (
        index === 0 ||
        option.label !== options[index - 1].label
      ))
  }

  _onChange (option) {
    const slideIndex = option.value;

    const { router } = this.context;

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
