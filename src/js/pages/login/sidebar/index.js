import React from 'react';

import Appstore from '@Images/login/appstore.png';
import Googlestore from '@Images/login/googleplaystore.png';

import * as s from './style';

const Sidebar = () => {
  return (
    <s.Options>
      <div>
        <img src={Googlestore} />
        <img src={Appstore} />
      </div>
      <nav>
        <ul>
          <li className='active'>Login</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <p>0800 <span>5652</span> 2452</p>
    </s.Options>
  );
};

export default Sidebar;
