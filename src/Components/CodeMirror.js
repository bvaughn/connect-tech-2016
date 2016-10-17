import React, { Component, PropTypes } from 'react';
import CodeMirror from 'react-codemirror';
import './CodeMirror.css';
import 'codemirror/mode/jsx/jsx';

const codeMirrorOptions = {
  lineNumbers: false,
  mode: 'jsx',
  readOnly: true,
  theme: 'brian'
};

export default class ReactCodeMirrorWrapper extends Component {
  static propTypes = {
    dimLines: PropTypes.array.isRequired,
    highlightLines: PropTypes.array.isRequired,
    source: PropTypes.string.isRequired
  };

  static defaultProps = {
    dimLines: [],
    highlightLines: []
  };

  componentDidMount () {
    const { dimLines, highlightLines } = this.props;

    this._addClassNameToLines(dimLines, 'dim');
    this._addClassNameToLines(highlightLines, 'highlight');
  }

  render () {
    const { source } = this.props;

    return (
      <CodeMirror
        options={codeMirrorOptions}
        ref={(ref) => this.reactCodeMirror = ref}
        value={source}
      />
    );
  }

  _addClassNameToLines (lineNumbers, className) {
    lineNumbers.forEach(([start, stop]) => {
      this.reactCodeMirror.codeMirror.doc.markText(
        { line: start, ch: 0 },
        { line: stop + 1, ch: 0 },
        { className }
      );
    })
  }
}
