import React from 'react';
import PropTypes from 'prop-types';

import ReceiverList from './components/ReceiverList';
import ReceiverHeader from './components/ReceiverHeader';
import Registers from './components/Registers';

import * as S from './styled';

const Receptores = ({
  title,
  storeValue,
  data,
  redirect
}) => {
  return (
    <S.ReceiverWrapper>
      <ReceiverHeader
        title={title}
        redirect={redirect}
        storeValue={storeValue}
      />
      <S.FrameWrapper>
        <ReceiverList
          title={title}
          storeValue={storeValue}
        />
        <Registers
          redirect={redirect}
          listToMap={data}
        />
      </S.FrameWrapper>
    </S.ReceiverWrapper>
  );
};

Receptores.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  storeValue: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired
};

export default Receptores;
