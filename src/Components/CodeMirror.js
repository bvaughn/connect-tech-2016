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
    highlightLines: PropTypes.array.isRequired,
    source: PropTypes.string.isRequired
  };

  static defaultProps = {
    highlightLines: []
  };

  componentDidMount () {
    const { highlightLines } = this.props;

    highlightLines.forEach((tuple) => {
      const [ start, stop ] = tuple;

      this.reactCodeMirror.codeMirror.doc.markText(
        { line: start, ch: 0 },
        { line: stop + 1, ch: 0 },
        { className: 'highlight' }
      );
    })
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
}
