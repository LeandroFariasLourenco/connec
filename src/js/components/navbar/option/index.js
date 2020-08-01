import React from 'react';
import PropTypes from 'prop-types';

import * as s from './styled';

const Option = ({ title }) => {
  return (
    <s.List>
      <div>
      </div>
      <span>
        {title}
      </span>
    </s.List>
  );
};

Option.propTypes = {
  title: PropTypes.string.isRequired
};

export default Option;
