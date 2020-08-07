import React from 'react';
import * as S from './styled';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({
  title,
  text,
  handler,
  reset,
  classNames
}) => (
  <S.Button
    className={cx({ 'reset-style': reset }, classNames)}
    title={title}
    onClick={handler}
  >
    {text}
  </S.Button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  reset: PropTypes.bool,
  handler: PropTypes.func
};

Button.defaultProps = {
  reset: false,
  classNames: '',
  handler: () => {}
};

export default Button;
