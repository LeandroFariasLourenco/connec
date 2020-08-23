import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { resetSearch } from '@Store/ducks/history';

import DeleteIcon from '@Icons/delete.svg';

import * as S from './styled';

const SearchTerm = () => {
  const dispatch = useDispatch();
  const { searchBar } = useSelector(state => state.history);

  return (<S.SearchTerm>
    Você buscou pelo hospital
    <span>
      {searchBar}

      <S.Delete
        reset
        title='Deletar'
        onClick={() => dispatch(resetSearch())}
      >
        <img
          alt='Deletar'
          title='Excluir'
          src={DeleteIcon}
        />
      </S.Delete>
    </span>
  </S.SearchTerm>
  );
};

export default SearchTerm;
