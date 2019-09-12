import React from 'react';
import ReactDOM from 'react-dom';

import Loading from './Loading';

const buttonName = 'firstButton';

ReactDOM.render(<Loading buttonName={buttonName} />, document.getElementById('app'));
