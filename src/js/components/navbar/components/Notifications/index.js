import React from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import * as S from './styled';

const Notifications = () => {
  const { notificationOpen: isOpen } = useSelector(state => state.general);
  // const dispatch = useDispatch();

  return (
    <S.PopupWrapper
      className={cx({ 'is--open': isOpen })}
    >
      <S.Footer>

      </S.Footer>
    </S.PopupWrapper>
  );
};

export default Notifications;
