import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Header = ({
  title
}) => {
  return (
    <S.HeadingTitle>
      {title}
    </S.HeadingTitle>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
