import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Form = React.forwardRef(({
  children,
  ...props
}, ref) => {
  return (
    <S.FormModel
      ref={ref}
      {...props}
    >
      {children}
    </S.FormModel>
  );
});

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]).isRequired
};

Form.displayName = 'Form';

export default memo(Form);
