import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Form = ({
  handler,
  children,
  ...props
}) => {
  return (
    <S.FormModel
      onSubmit={handler}
      {...props}
    >
      {children}
    </S.FormModel>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  handler: PropTypes.func.isRequired
};

export default Form;
