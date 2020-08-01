import React from 'react';

import Appstore from '@Images/login/appstore.png';
import Googlestore from '@Images/login/googleplaystore.png';
import Support from '@Svgs/login/support.svg';

import * as s from './styled';

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
      <div className='support'>
        <img src={Support} />
        <p>0800 <span>5652</span> 2452</p>
      </div>
    </s.Options>
  );
};

export default Sidebar;
