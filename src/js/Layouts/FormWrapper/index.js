import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Form = ({ children }) => (
  <S.FormWrapper>
    {children}
  </S.FormWrapper>
);

Form.propTypes = {
  children: PropTypes.node.isRequired
};

export default memo(Form);
