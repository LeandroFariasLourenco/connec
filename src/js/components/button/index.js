import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  title,
  text,
  handler,
  children,
  ...props
}) => (
  <S.Btn
    title={title}
    onClick={handler}
    {...props}
  >
    {text}
    {children}
  </S.Btn>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  reset: PropTypes.bool,
  handler: PropTypes.func
};

Button.defaultProps = {
  reset: false,
  children: <></>,
  text: '',
  handler: () => {}
};

export default Button;
