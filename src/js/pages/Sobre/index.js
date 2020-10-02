import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Sidebar from '@Components/Sidebar';

import * as S from './styled';

const Sobre = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <S.Wrapper>
      <Sidebar />
      <CSSTransition
        in={loading}
        classNames='transition'
        timeout={300}
      >
        <>
        </>
      </CSSTransition>
    </S.Wrapper>
  );
};

export default Sobre;
