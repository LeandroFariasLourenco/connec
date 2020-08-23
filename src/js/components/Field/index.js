import React, { memo } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Field = ({
  icon,
  children,
  ...props
}) => {
  return (
    <S.Wrapper
      {...props}
    >
      {icon && <img className='icon' src={icon} />}
      {children}
    </S.Wrapper>
  );
};

Field.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default memo(Field);
