import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { setNavigation } from '@Store/ducks/navbar';

import PropTypes from 'prop-types';

import * as s from './styled';

const Option = ({ title, pathname }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const { currentPage } = useSelector(store => store.navbar);

  const handleNavigation = () => {
    dispatch(setNavigation());
  };

  useEffect(() => {
    setIsActive(currentPage.includes(pathname));
  }, [isActive]);

  return (
    <s.Wrapper className={cx(isActive ? 'active' : 'not-active')}>
      <s.Handler
        onClick={handleNavigation}
      >
        <s.Logo/>
        <s.Title>
          {title}
        </s.Title>
      </s.Handler>
    </s.Wrapper>
  );
};

Option.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired
};

export default Option;
