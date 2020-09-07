import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { pluralize } from '@Utils/General';

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
        {count ? (
          <>
            <span>
              {count}
            </span>
            {pluralize(title, count)}
          </>
        ) : (
          <span>
            nenhum {title.toLowerCase()}
          </span>
        )}
      </S.ReceiverCount>
    </S.HeadingWrapper>
  );
};

ReceiverList.propTypes = {
  title: PropTypes.string.isRequired,
  storeValue: PropTypes.string.isRequired
};

export default ReceiverList;
