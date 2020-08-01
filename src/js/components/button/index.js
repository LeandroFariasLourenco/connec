import React from 'react';
import * as S from './styled';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <S.Button>
    {text}
  </S.Button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
