import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import AddImage from '@Images/register/AddImage.png';

import * as S from './styled';

const Third = () => {
  const [previewImg, setPreviewImg] = useState('');
  const fileRef = useRef();
  const [isMounted, setIsMounted] = useState(false);
  const {
    register: field,
    errors,
    handleSubmit
  } = useForm();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleFile = ({ target: { files } }) => {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onloadend = () => setPreviewImg(reader.result);
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
        <S.NotificationText>
          Você também pode optar por cadastrar uma foto da pessoa se desejar;
        </S.NotificationText>
        <S.NotificationText>
          Clicando na imagem abaixo &#128516;
        </S.NotificationText>

        <S.InputFileLabel htmlFor='fileInput'>
          <img src={previewImg || AddImage} />
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
        <button>sumbit</button>
      </S.FormWrapper>
    </CSSTransition>
  );
};

export default Third;
