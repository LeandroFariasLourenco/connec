import React, { useState, useEffect, memo } from 'react';
import Proptypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Navbar from '@Components/Navbar';

import './style.scss';

import * as S from './styled';

const Container = ({ children, ...props }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <S.Wrapper>
      <Navbar />
      <S.RightWrapper
        {...props}
      >
        <CSSTransition
          in={isMounted}
          timeout={300}
          classNames='transition'
        >
          <S.ContentWrapper>
            {children}
          </S.ContentWrapper>
        </CSSTransition>
      </S.RightWrapper>
    </S.Wrapper>
  );
};

Container.propTypes = {
  children: Proptypes.node.isRequired
};

export default memo(Container);
