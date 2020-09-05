import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import * as S from './styled';

const ReceiverList = ({
  title,
  storeValue
}) => {
  const { [`${storeValue}Count`]: count } = useSelector(state => state[`${storeValue}`]);

  return (
    <S.HeadingWrapper>
      <S.ListTitle>
        {title}
      </S.ListTitle>
      <S.ReceiverCount>
        <span>
          {count}
        </span>
        {title}
      </S.ReceiverCount>
    </S.HeadingWrapper>
  );
};

ReceiverList.propTypes = {
  title: PropTypes.string.isRequired,
  storeValue: PropTypes.string.isRequired
};

export default ReceiverList;
