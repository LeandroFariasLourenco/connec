import React from 'react';
import PropTypes from 'prop-types';

import Container from '@Layouts/Container';

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
    <Container>
      <S.ReceiverWrapper>
        <ReceiverHeader
          title={title}
          redirect={redirect}
        />
        <S.FrameWrapper>
          <ReceiverList
            title={title}
            storeValue={storeValue}
          />
          <Registers
            listToMap={data}
          />
        </S.FrameWrapper>
      </S.ReceiverWrapper>
    </Container>
  );
};

Receptores.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  storeValue: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired
};

export default Receptores;
