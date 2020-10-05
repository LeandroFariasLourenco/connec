import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Logo from '@Images/login/logo.png';

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
        <S.AboutUs>
          <img src={Logo} />
          <span>
            Healthtrack é uma solução proposta pelo nosso grupo com o objetivo de auxiliar a transação de
            orgãos em hospitais.
          </span>
          <span>
            É uma solução voltado ao colaborador do hospital aonde o mesmo tem acesso a uma dashboard para visualização
            das informações e relatórios do hospital.
          </span>
        </S.AboutUs>
      </CSSTransition>
    </S.Wrapper>
  );
};

export default Sobre;
