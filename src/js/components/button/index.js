import React from 'react';
import * as S from './styled';
import PropTypes from 'prop-types';

const Button = ({ title, text, handler }) => (
  <S.Button
    title={title}
    onClick={handler}
  >
    {text}
  </S.Button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handler: PropTypes.func
};

Button.defaultProps = {
  handler: () => {}
};

export default Button;
