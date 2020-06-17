import React from 'react';
import PropTypes from 'prop-types';

import * as s from './style';

const Input = ({
  _icon,
  _type,
  _id,
  _maxLength = 30,
  _name,
  _placeholder
}) => {
  return (
    <s.Wrapper>
      {_icon && <img className='icon' src={_icon} />}
      <input
        type={_type}
        id={_id}
        maxLength={_maxLength}
        name={_name}
        placeholder={_placeholder} />
    </s.Wrapper>
  );
};

Input.propTypes = {
  _icon: PropTypes.string,
  _type: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  _maxLength: PropTypes.number.isRequired,
  _name: PropTypes.string.isRequired,
  _placeholder: PropTypes.string.isRequired
};

export default Input;
