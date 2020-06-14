import React from 'react';
import * as s from './style';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <s.Button>
    {text}
  </s.Button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
