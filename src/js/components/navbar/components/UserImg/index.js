import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'lazysizes';

import Placeholder from '@Images/lazyload/placeholder.jpg';

import Notifications from '../Notifications';

import { openNotification as openNotify } from '@Store/ducks/general';

import * as S from './styled';

const UserImg = () => {
  const { notificationOpen: isOpen } = useSelector(state => state.general);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openNotify(!isOpen));
  };

  return (
    <S.ImageWrapper>
      <S.UserImage
        data-src='https://www.sirgia.com/wp-content/uploads/2017/12/shutterstock_83672362-01.jpg'
        src={Placeholder}
        className='lazyload'
        data-sizes='auto'
      />
      <S.NotificationCounter
        reset
        title='Notificações'
        onClick={handleClick}
      >
        8
      </S.NotificationCounter>
      <Notifications />
    </S.ImageWrapper>
  );
};

export default UserImg;
