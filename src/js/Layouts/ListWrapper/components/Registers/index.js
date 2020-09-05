import React from 'react';
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import 'lazysizes';

import Placeholder from '@Images/lazyload/placeholder.jpg';

import ArrowSvg from '@Icons/back.svg';

import * as S from './styled';

const Registers = ({
  listToMap
}) => {
  // const { receptorCount }

  return (
    <S.ListWrapper>
      {listToMap.map(({
        id,
        imageUrl,
        name,
        registerDate,
        score
      }) => (
        <S.Receiver
          key={id}
        >
          <S.ReceiverThumb
            data-sizes='auto'
            data-src={imageUrl}
            className='lazyload'
            src={Placeholder}
          />
          <S.ReceiverName>
            {name}
          </S.ReceiverName>
          <S.ReceiverRegisterDate>
            {registerDate}
          </S.ReceiverRegisterDate>
          <S.ReceiverCount>
            {score}
          </S.ReceiverCount>
          <S.ReceiverDetails
            reset
            title='Ver mais'
            onClick={() => {}}
          >
            <img src={ArrowSvg} />
          </S.ReceiverDetails>
        </S.Receiver>
      ))}
    </S.ListWrapper>
  );
};

Registers.propTypes = {
  listToMap: PropTypes.array.isRequired
};

export default Registers;
