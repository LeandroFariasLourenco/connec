import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setNavigation } from '@Store/ducks/navbar';
import * as S from './styled';

const ReceiverList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { receptorCount } = useSelector(state => state.receiver);
  const receiverText = receptorCount >= 2
    ? `+ ${receptorCount} Receptores`
    : 'Nenhum receptor nos últimos 3 meses';

  const handleClick = () => {
    dispatch(setNavigation('/receptores/cadastro'));
    history.push('/receptores/cadastro');
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderRegister
        reset
        title='Cadastrar'
        text='+ Receptor'
        handler={handleClick}
      />

      <S.HeaderNotify>
        <S.HeaderText>
          <span data-receiver={receptorCount}>{receptorCount}</span>
          {receiverText}
        </S.HeaderText>
      </S.HeaderNotify>
    </S.HeaderWrapper>
  );
};

export default ReceiverList;
