import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import * as S from './styled';

const FormButtons = ({
  callback,
  nextTitle,
  backTitle,
  goBack,
  goNext,
  centered
}) => (
  <S.ButtonsWrapper className={cx({ centered: centered })}>
    <S.GoBack
      title='Anterior'
      className={cx({
        hidden: !goBack
      })}
      text={backTitle}
      onClick={() => callback()}
    />
    <S.Continue
      title='Continuar'
      className={cx({
        hidden: !goNext
      })}
      text={nextTitle}
    />
  </S.ButtonsWrapper>
);

FormButtons.propTypes = {
  callback: PropTypes.func.isRequired,
  nextTitle: PropTypes.string,
  backTitle: PropTypes.string,
  goBack: PropTypes.bool,
  goNext: PropTypes.bool,
  centered: PropTypes.bool
};

FormButtons.defaultProps = {
  nextTitle: 'Próximo',
  backTitle: 'Voltar',
  goBack: true,
  goNext: true,
  centered: false
};

export default memo(FormButtons);
