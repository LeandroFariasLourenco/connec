import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import AddImage from '@Images/register/AddImage.png';

import { updatePatient } from '@Requests/Patient';

import { getPatient } from '@Utils/Object';
import { getStorage } from '@Utils/General';

import { setActiveStep } from '@Store/ducks/register';
import { setNavigation } from '@Store/ducks/navbar';

import FormButtons from '@Components/FormButtons';
import Loader from '@Components/Loader';

import * as S from './styled';

const Second = ({ formType, patientId }) => {
  const { endereco } = getStorage(`${formType}update`, false);
  const stored = getStorage(formType, false);

  const { currentStep } = useSelector((state) => state.register);

  const [finishedLoading, setFinishedLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState(stored?.foto || '');
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const fileRef = useRef();
  const {
    register: field,
    handleSubmit
  } = useForm();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async () => {
    const patient = getPatient(stored, previewImg, endereco.codigo);
    console.log(patient);
    setLoading(true);

    try {
      await updatePatient(`${formType}es/${patientId}`, {
        patient
      }).then((response) => {
        return response;
      }, (err) => err);
    } catch (e) {
      return console.warn(e);
    }
    setLoading(false);
    setFinishedLoading(true);
    sessionStorage.removeItem(formType);
  };

  const handleFile = ({ target: { files } }) => {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = () => setPreviewImg(reader.result);
  };

  const handleRedirect = () => {
    dispatch(setNavigation(`/${formType}s/1`));
    history.push(`/${formType}es/${patientId}`);
  };

  return (
    <CSSTransition
      in={isMounted}
      classNames='transition'
      timeout={600}
    >
      <S.FormWrapper
        active
        onSubmit={handleSubmit(onSubmit)}
      >
        {loading && <Loader />}

        {!finishedLoading ? (
          <div className={cx({
            'is--loading': loading
          })}>
            <S.NotificationText>
              Você pode alterar sua foto ou adicionar uma caso não tenha
            </S.NotificationText>
            <S.NotificationText>
              Clicando na imagem abaixo &#128516;
            </S.NotificationText>

            <S.InputFileLabel htmlFor='fileInput'>
              <img className={cx({ 'image-selected': !!previewImg })} src={previewImg || AddImage} />
            </S.InputFileLabel>

            <S.ChooseImage
              type='file'
              id='fileInput'
              ref={(ref) => {
                fileRef.current = ref;
                field({ required: false });
              }}
              name='imagem'
              multiple={false}
              onChange={handleFile}
            />

            <FormButtons
              callback={() => dispatch(setActiveStep(currentStep - 1))}
              centered
            />
          </div>
        ) : (
          <S.NotificationText>
              Atualizado com sucesso!
            <S.RedirectButton title='Avançar' onClick={() => handleRedirect()}>
                Clique aqui e veja as informações do {formType}
            </S.RedirectButton>
          </S.NotificationText>
        )}
      </S.FormWrapper>
    </CSSTransition>
  );
};

Second.propTypes = {
  formType: PropTypes.string.isRequired,
  patientId: PropTypes.string.isRequired
};

export default Second;
