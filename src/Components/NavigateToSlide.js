import classnames from 'classnames';
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
    this._optionHeight = this._optionHeight.bind(this);;
    this._optionRenderer = this._optionRenderer.bind(this);;
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
            optionHeight={this._optionHeight}
            optionRenderer={this._optionRenderer}
            value={slideIndex}
          />
        </div>
      </div>
    );
  }

  _filenamesToOptions (filenames) {
    return filenames
      .map((filename, index) => ({
        disabled: filename.indexOf('--') > 0,
        label: filename
          .replace(/^[^-]+-/g, '')
          .replace(/\.js$/g, '')
          .replace(/-+/g, ' ')
          .trim(),
        value: index
      }))
      .filter((option, index, options) => (
        index > 0 &&
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

  _optionHeight ({ option }) {
    return option.disabled
      ? 20
      : 35
  }

  _optionRenderer ({ focusedOption, focusOption, key, labelKey, option, selectValue, style }) {
    const className = classnames('VirtualizedSelectOption', {
      VirtualizedSelectFocusedOption: option === focusedOption,
      VirtualizedSelectOptionHeader: option.disabled
    });

    const events = option.disabled
      ? {}
      : {
        onClick: () => selectValue(option),
        onMouseOver: () => focusOption(option)
      };

    return (
      <div
        className={className}
        key={key}
        style={style}
        {...events}
      >
        {option[labelKey]}
      </div>
    )
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
