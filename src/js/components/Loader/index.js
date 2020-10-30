import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import LoaderGif from '@Images/lazyload/loader.gif';

import * as S from './styled';

const Loader = ({ message }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <CSSTransition
      in={loading}
      classNames='transition'
      timeout={900}
    >
      <S.LoaderWrapper>
        {message} &#128516;

        <img src={LoaderGif} alt='Carregando' title='Carregando' />
      </S.LoaderWrapper>
    </CSSTransition >
  );
};

Loader.defaultProps = {
  message: 'Estamos processando suas informações'
};

Loader.propTypes = {
  message: PropTypes.string
};

export default Loader;
