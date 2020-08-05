import React, { useEffect, useState } from 'react';
import * as s from './styled';

import Logo from '@Svgs/navbar/logo.svg';
// import Chart from '@Svgs/navbar/chart.svg';
// import Notebook from '@Svgs/navbar/notebook.svg';
// import User from '@Svgs/navbar/user.svg';

import Option from './option/index';
import navbarOptions from '@Utils/navbar';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(false);

  useEffect(() => {
    const [currentPage] = navbarOptions.map((option) => {
      const page = window.location.pathname.replace(/[/]/gi, '');
      return option.title === page && option;
    });
    setCurrentPage(currentPage.title);
  }, []);

  return (
    <s.Wrapper>
      <img src={Logo} />
      <nav>
        <ul>
          {navbarOptions.map((option, i) => (
            <Option
              key={i}
              title={option.title}
              active={currentPage}
            />
          ))}
        </ul>
      </nav>
    </s.Wrapper>
  );
};

export default Navbar;
