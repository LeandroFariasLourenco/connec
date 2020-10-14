import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import C from '@Constants';

import { setNavigation } from '@Store/ducks/navbar';

import { ReactComponent as SupportSvg } from '@Icons/login/support.svg';
import Logo from '@Icons/navbar/logo.svg';

import navbarOptions from '@Resources/Navbar';

import Option from './components/Option';
import UserArea from './components/UserArea';

import * as S from './styled';

const Navbar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavigation(window.location.pathname));
  }, []);

  return (
    <S.Wrapper>
      <S.Logo
        src={Logo}
      />
      <S.Navigation>
        <S.Options>
          {navbarOptions.map((option, i) => (
            <Option
              key={i}
              title={option.title}
              pathname={option.pathname}
              iconActive={option.iconActive}
              iconDefault={option.iconDefault}
            />
          ))}
        </S.Options>
      </S.Navigation>

      <UserArea />

      <S.SacWrapper>
        <S.SacInfo
          href={`https://api.whatsapp.com/send?phone=${C.SACNUMBER}`}
          title='Atendimento'
          target='_blank'
        >
          <SupportSvg />
          {C.SACNUMBER}
        </S.SacInfo>
      </S.SacWrapper>
    </S.Wrapper>
  );
};

export default memo(Navbar);
