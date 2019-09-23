import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './mirco';
import Root from './dist/bundle.js'
import 'antd/dist/antd.css'
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
