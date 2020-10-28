import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';

import { openNotification } from '@Store/ducks/general';

import * as S from './styled';

import 'reactjs-popup/dist/index.css';

const Notifications = () => {
  const { notificationOpen: isOpen } = useSelector(state => state.general);
  const dispatch = useDispatch();

  return (
    <Popup
      open={isOpen}
      onClose={() => {
        dispatch(openNotification(false));
      }}
    >
      <S.PopupWrapper>
        <S.Content>

        </S.Content>
        <S.Footer>

        </S.Footer>
      </S.PopupWrapper>
    </Popup>
  );
};

export default Notifications;
