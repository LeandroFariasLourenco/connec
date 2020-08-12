import React, { useEffect, useState } from 'react';

import Logo from '@Svgs/navbar/logo.svg';
// import Chart from '@Svgs/navbar/chart.svg';
// import Notebook from '@Svgs/navbar/notebook.svg';
// import User from '@Svgs/navbar/user.svg';

import Option from './Option';
import UserImg from './UserImg';
import navbarOptions from '@Utils/Navbar';

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
      <UserImg />

      <S.Sac>

      </S.Sac>
    </S.Wrapper>
  );
};

export default Navbar;
