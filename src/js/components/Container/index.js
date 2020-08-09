import React from 'react';
import Proptypes from 'prop-types';

import Navbar from '../Navbar';

import * as S from './styled';

const Container = ({ children, ...props }) => (
  <S.Wrapper>
    <Navbar />
    <S.RightWrapper
      {...props}
    >
      { children }
    </S.RightWrapper>
  </S.Wrapper>
);

Container.propTypes = {
  children: Proptypes.node.isRequired
};

export default Container;
