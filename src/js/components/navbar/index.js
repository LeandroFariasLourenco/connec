import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';

import { setNavigation } from '@Store/ducks/navbar';

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

      <S.Sac>

      </S.Sac>
    </S.Wrapper>
  );
};

export default memo(Navbar);
