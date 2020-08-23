import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  title,
  text,
  children,
  ...props
}) => (
  <S.Btn
    title={title}
    {...props}
  >
    {text}
    {children}
  </S.Btn>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

Button.defaultProps = {
  children: <></>,
  text: ''
};

export default memo(Button);
