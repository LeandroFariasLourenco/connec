import React from 'react';
import * as s from './style';

import Logo from '@Svgs/navbar/logo.svg';
// import Chart from '@Svgs/navbar/chart.svg';
// import Notebook from '@Svgs/navbar/notebook.svg';
// import User from '@Svgs/navbar/user.svg';

import Option from './option/index';
import navbarOptions from '@Global/navbarOptions';

const Navbar = () => {
  return (
    <s.Wrapper>
      <img src={Logo} />
      <nav>
        <ul>
          {navbarOptions.map((option, i) => (
            <Option
              key={i}
              title={option.title}
            />
          ))}
        </ul>
      </nav>
    </s.Wrapper>
  );
};

export default Navbar;
