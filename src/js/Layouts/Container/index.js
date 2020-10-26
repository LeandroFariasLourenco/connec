import React, { useState, useEffect, memo } from 'react';
import Proptypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import Navbar from '@Components/Navbar';

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
          timeout={0}
          classNames='transition'
          mountOnEnter
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
  children: Proptypes.node
};

Container.defaultProps = {
  children: <> </>
};

export default memo(Container);
