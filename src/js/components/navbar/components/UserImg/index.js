import React from 'react';

import * as S from './styled';

const UserImg = () => {
  return (
    <S.ImageWrapper>
      <S.UserImage
        src='https://www.sirgia.com/wp-content/uploads/2017/12/shutterstock_83672362-01.jpg'
      />
      <S.NotificationCounter
        reset
        title='Notificações'
      >
          8
      </S.NotificationCounter>
    </S.ImageWrapper>
  );
};

export default UserImg;
