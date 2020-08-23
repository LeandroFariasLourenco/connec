import React, { useEffect, useState, memo } from 'react';

import Logo from '@Icons/navbar/logo.svg';
import navbarOptions from '@Resources/Navbar';

import Option from './components/Option';
import UserArea from './components/UserArea';

import * as S from './styled';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(false);

  useEffect(() => {
    const [currentPage] = navbarOptions.map((option) => {
      const page = window.location.pathname.replace(/[/]/gi, '');
      return option.title === page && option;
    });
    setCurrentPage(currentPage.title);
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
              active={currentPage}
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
