import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Loading = (props) => {
  const { buttonName } = props;
  return (
    <div className="suggest">
      loading.....
      { buttonName }
    </div>
  );
};

Loading.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Loading;
