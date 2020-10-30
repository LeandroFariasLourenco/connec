import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import Icon from '@Icons/hospital.svg';

import Notifications from '../Notifications';

import { openNotification as openNotify } from '@Store/ducks/general';

import * as S from './styled';

const UserImg = () => {
  const { hasNotification, notificationOpen: isOpen } = useSelector(state => state.general);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!hasNotification) {
      return;
    }

    dispatch(openNotify(!isOpen));
  };

  return (
    <S.ImageWrapper
      reset
      title={!isOpen ? 'Notificações' : 'Usuário'}
      onClick={handleClick}
    >
      <S.UserImage
        className={cx({ 'has--notify': hasNotification })}
        src={Icon}
      />
      <Notifications />
    </S.ImageWrapper>
  );
};

export default UserImg;
