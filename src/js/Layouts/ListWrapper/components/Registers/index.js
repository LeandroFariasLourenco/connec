import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Placeholder from '@Images/lazyload/placeholder.jpg';

import ArrowSvg from '@Icons/back.svg';

import * as S from './styled';

import 'lazysizes';

const Registers = ({
  listToMap,
  redirect
}) => {
  const history = useHistory();

  const handleViewMore = (id) => {
    history.push(`/${redirect}/${id}`);
  };

  return (
    <S.ListWrapper>
      {listToMap.map(({
        codigo,
        linkImage,
        nome,
        dataNascimento,
        score,
        foto
      }) => (
        <S.Receiver
          key={codigo}
        >
          <S.ReceiverThumb
            data-sizes='auto'
            data-src={linkImage}
            className='lazyload'
            src={foto || Placeholder}
          />
          <S.ReceiverName>
            {nome}
          </S.ReceiverName>
          <S.ReceiverRegisterDate>
            {new Date(dataNascimento).toLocaleDateString('pt-BR')}
          </S.ReceiverRegisterDate>
          <S.ReceiverCount>
            {score}
          </S.ReceiverCount>
          <S.ReceiverDetails
            reset
            title='Ver mais'
            onClick={() => handleViewMore(codigo)}
          >
            <img src={ArrowSvg} />
          </S.ReceiverDetails>
        </S.Receiver>
      ))}
    </S.ListWrapper>
  );
};

Registers.propTypes = {
  listToMap: PropTypes.array.isRequired,
  redirect: PropTypes.string.isRequired
};

export default Registers;
