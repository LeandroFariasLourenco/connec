import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import AddImage from '@Images/register/AddImage.png';

import { postPatient } from '@Requests/Patient';

import { getStorage } from '@Utils/General';

import { setActiveStep } from '@Store/ducks/register';
import { setNavigation } from '@Store/ducks/navbar';

import FormButtons from '@Components/FormButtons';
import Loader from '@Components/Loader';

import * as S from './styled';

const Third = ({ formType }) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector((state) => state.register);
  const [finishedLoading, setFinishedLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [patientId, setPatientId] = useState('');
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const stored = getStorage(formType, false);

    const patient = {
      celular: stored.celular,
      cpf: stored.cpf,
      dataNascimento: stored.dataNascimento,
      nome: stored.nome.split(/\s/g)[0],
      sobrenome: stored.nome.split(/\s/g)[1],
      rg: stored.rg,
      score: 2,
      orgao: stored.orgao,
      foto: previewImg,
      telefone: stored.telefone,
      tipoSanguineo: stored.tipoSanguineo,
      endereco: {
        numero: stored.numero,
        complemento: stored.complemento,
        cidade: stored.cidade,
        uf: stored.uf,
        logradouro: stored.logradouro,
        cep: stored.cep
      }
    };

    try {
      await postPatient(`${formType}es`, {
        patient: { ...patient }
      }).then(({ data: { codigo } }) => {
        setPatientId(codigo);
      });
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
              Você também pode optar por cadastrar uma foto da pessoa se desejar;
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
            Cadastrado com sucesso!
            <S.RedirectButton onClick={() => handleRedirect()}>
              Clique aqui e veja as informações do ${formType}
            </S.RedirectButton>
          </S.NotificationText>
        )}
      </S.FormWrapper>
    </CSSTransition>
  );
};

Third.propTypes = {
  formType: PropTypes.string.isRequired
};

export default Third;
