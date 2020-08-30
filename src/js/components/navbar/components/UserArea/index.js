import React from 'react';
import { useHistory } from 'react-router-dom';

import LogoutIcon from '@Icons/logout.svg';

import UserImage from '../UserImg';

import * as S from './styled';

const UserArea = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/');
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
