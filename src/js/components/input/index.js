import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Input = ({
  icon,
  type,
  id,
  maxLength = 30,
  name,
  placeholder
}) => {
  return (
    <S.Wrapper>
      {icon && <img className='icon' src={icon} />}
      <input
        type={type}
        id={id}
        maxLength={maxLength}
        name={name}
        placeholder={placeholder} />
    </S.Wrapper>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Input;
