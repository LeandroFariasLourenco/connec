import React from 'react';
import Navbar from '@Components/navbar/index';
import Backbutton from '@Svgs/cadastro/back.svg';
import Steps from './steps/index';
import Form from './form/index';

import * as s from './style';

const Cadastro = () => {
  return (
    <s.Wrapper>
      <Navbar />
      <section>
        <div className='return'>
          <img src={Backbutton} />
        </div>
        <Steps />
        <Form />
      </section>
    </s.Wrapper>
  );
};

export default Cadastro;
