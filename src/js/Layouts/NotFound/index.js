import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from '@Components/Button';

import * as S from './styled';

const NotFound = ({
  message,
  heading,
  type,
  redirect
}) => {
  const history = useHistory();
  const handleNavigation = () => history.push(redirect);

  return (
    <S.MessageWrapper>
      <span>{message}</span>
      <strong>{heading}</strong>
      <Button
        onClick={() => handleNavigation()}
        title={`Cadastrar ${type}`}
        text={`Cadastrar ${type}`}
      />
    </S.MessageWrapper>
  );
};

NotFound.propTypes = {
  message: PropTypes.string,
  heading: PropTypes.string,
  type: PropTypes.string,
  redirect: PropTypes.string
};

NotFound.defaultProps = {
  message: '',
  heading: '',
  type: '',
  redirect: ''
};

export default memo(NotFound);
