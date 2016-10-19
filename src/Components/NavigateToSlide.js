import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
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
    this._onClick = this._onClick.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);;
    this._optionHeight = this._optionHeight.bind(this);;
    this._optionRenderer = this._optionRenderer.bind(this);;
  }

  componentDidMount () {
    const { registerKeyDownHandler } = this.context;

    registerKeyDownHandler(this._onKeyDown);

    document.body.addEventListener('click', this._onClick);
  }

  componentWillUnmount () {
    const { unregisterKeyDownHandler } = this.context;

    unregisterKeyDownHandler(this._onKeyDown);

    document.body.removeEventListener('click', this._onClick);
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
            ref={(ref) => this._select = ref}
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

  _onClick (event) {
    const { active } = this.state;

    if (!active) {
      return;
    }

    const select = findDOMNode(this._select);

    if (
      select === event.target ||
      select.contains(event.target)
    ) {
      return;
    }

    this.setState({
      active: false
    });
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
    const { active } = this.state;

    switch (event.key) {
      case 't':
        if (!active) {
          this.setState({
            active: true
          });

          event.preventDefault();

          return true;
        }
        break;
      case 'Escape':
        if (active) {
          this.setState({
            active: false
          });

          return true;
        }
        break;
      default:
        // Linting requires this :)
        break;
    }
  }
}
