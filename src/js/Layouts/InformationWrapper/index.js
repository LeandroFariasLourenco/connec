import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Information from './components/Information';

import * as S from './styled';

const InformationWrapper = ({ patient }) => {
  return (
    <S.Wrapper>
      <Header patient={patient}/>
      <Information patient={patient}/>
    </S.Wrapper>
  );
};

InformationWrapper.propTypes = {
  patient: PropTypes.object.isRequired
};

export default InformationWrapper;
