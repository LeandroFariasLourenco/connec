import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import { setNavigation } from '@Store/ducks/navbar';

import sidebarOptions from '@Resources/Sidebar';

import * as S from './styled';

const Support = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(state => state.navbar);
  const history = useHistory();

  const handleDispatch = (pathname) => {
    dispatch(setNavigation(pathname));
    history.push(pathname);
  };

  return (
    <S.Navigation>
      <S.MenuWrapper>
        {sidebarOptions.map(({ id, pathname, title }) => (
          <S.MenuOption
            reset
            key={id}
            title={title}
            className={cx({ 'is-active': pathname === currentPage })}
            onClick={() => handleDispatch(pathname)}
          >
            {title}
          </S.MenuOption>
        ))}
      </S.MenuWrapper>
    </S.Navigation>
  );
};

export default memo(Support);
