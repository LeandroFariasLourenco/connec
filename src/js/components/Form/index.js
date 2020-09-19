import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Form = ({
  children,
  ...props
}) => {
  return (
    <S.FormModel
      {...props}
    >
      {children}
    </S.FormModel>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired
};

export default memo(Form);
