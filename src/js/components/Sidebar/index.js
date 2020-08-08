import React from 'react';

import Navigation from './components/Navigation';
import Stores from './components/Stores';
import Support from './components/Support';

import * as S from './styled';

const Sidebar = () => {
  return (
    <S.Options>
      <Stores />
      <Navigation />
      <Support />
    </S.Options>
  );
};

export default Sidebar;
