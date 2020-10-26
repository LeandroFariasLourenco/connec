import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import { CSSTransition } from 'react-transition-group';

import { openNotification } from '@Store/ducks/general';

import * as S from './styled';

import 'reactjs-popup/dist/index.css';

const Notifications = () => {
  const { notificationOpen: isOpen } = useSelector(state => state.general);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();

  return (
    <Popup
      open={isOpen}
      onClose={() => {
        dispatch(openNotification(false));
      }}
    >
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames='transition'
        mountOnEnter
      >
        <S.PopupWrapper>
          <S.Content>

          </S.Content>
          <S.Footer>

          </S.Footer>
        </S.PopupWrapper>
      </CSSTransition>
    </Popup>
  );
};

export default Notifications;
