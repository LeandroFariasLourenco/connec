import React from 'react';

import Logo from '@Svgs/navbar/logo.svg';
// import Chart from '@Svgs/navbar/chart.svg';
// import Notebook from '@Svgs/navbar/notebook.svg';
// import User from '@Svgs/navbar/user.svg';

import Option from './option/index';
import navbarOptions from '@Utils/navbar';

import * as s from './styled';

const Navbar = (props) => {
  return (
    <s.Wrapper>
      <img src={Logo} />
      <nav>
        <ul>
          {navbarOptions.map((option, i) => (
            <Option
              key={i}
              title={option.title}
              pathname={option.pathname}
            />
          ))}
        </ul>
      </nav>
    </s.Wrapper>
  );
};

export default Navbar;
