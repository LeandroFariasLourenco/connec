import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';

import { setNavigation } from '@Store/ducks/navbar';

import * as S from './styled';

const Option = ({
  title,
  pathname,
  iconActive,
  iconDefault
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const { currentPage } = useSelector(store => store.navbar);
  const className = isActive ? 'active' : 'default';

  const handleNavigation = () => {
    dispatch(setNavigation(pathname));
    history.push(pathname);
  };

  useEffect(() => {
    setIsActive(currentPage.includes(pathname));
  }, [isActive]);

  return (
    <S.Wrapper>
      <S.Handler
        onClick={handleNavigation}
      >
        <S.LogoWrapper
          className={cx(className)}
        >
          <S.Logo
            src={iconActive}
            className={cx(className)}
          />
          <S.Logo
            src={iconDefault}
          />
        </S.LogoWrapper>
        <S.Title>
          {title}
        </S.Title>
      </S.Handler>
    </S.Wrapper>
  );
};

Option.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  iconActive: PropTypes.string.isRequired,
  iconDefault: PropTypes.string.isRequired
};

export default Option;
