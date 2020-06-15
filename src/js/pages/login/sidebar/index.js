import React from 'react';

import * as s from './style';

const Sidebar = () => {
  return (
    <s.Options>
      <div>

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
