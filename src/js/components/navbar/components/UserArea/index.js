import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import C from '@Constants';

import LogoutIcon from '@Icons/logout.svg';

import { setNavigation } from '@Store/ducks/navbar';

import UserImage from '../UserImage';

import * as S from './styled';

const UserArea = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    sessionStorage.removeItem('accesstoken');
    dispatch(setNavigation(C.PATHS.HOME));
    history.push(C.PATHS.HOME);
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
