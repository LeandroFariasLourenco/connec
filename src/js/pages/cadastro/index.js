import React from 'react';
import Button from '@Components/button/index';
import Navbar from '@Components/navbar/index';
import Backbutton from '@Svgs/cadastro/back.svg';

import * as s from './style';

const Cadastro = () => {
  return (
    <s.Wrapper>
      <Navbar />
      <section>
        <div className='return'>
          <img src={Backbutton} />
        </div>
        <div className='register'>
          <div className='register__steps'>
            <h2>Cadastro do doador</h2>
            <span className='active'>Informações básicas</span>
            <span>Tipo Sanguíneo</span>
            <span>Cadastro de órgãos</span>
            <Button
              text='Finalizar'
            />
          </div>
        </div>
      </section>
    </s.Wrapper>
  );
};

export default Cadastro;
