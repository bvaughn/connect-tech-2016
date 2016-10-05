import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Import global stylesheets here
import '../lib/font-awesome/css/font-awesome.min.css';
import '../lib/codemirror/lib/codemirror.css';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
