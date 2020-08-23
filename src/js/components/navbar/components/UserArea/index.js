import React from 'react';

import LogoutIcon from '@Icons/logout.svg';

import UserImage from '../UserImg';

import * as S from './styled';

const UserArea = () => {
  const handleLogout = () => {

  };

  return (
    <S.UserAreaWrapper>
      <UserImage />

      <S.Logout
        reset
        title='Sair'
        onClick={handleLogout}
      >
        <img
          src={LogoutIcon}
          alt='Deslogar'
          title='Sair'
        />
      </S.Logout>
    </S.UserAreaWrapper>
  );
};

export default UserArea;
