import React from 'react';
import CodeMirror from 'react-codemirror';
import './CodeMirror.css';

require('codemirror/mode/jsx/jsx')

const codeMirrorOptions = {
  lineNumbers: false,
  mode: 'jsx',
  readOnly: true,
  theme: 'brian'
}

export default ({ source }) => {
  return (
    <CodeMirror
      options={codeMirrorOptions}
      value={source}
    />
  );
}
