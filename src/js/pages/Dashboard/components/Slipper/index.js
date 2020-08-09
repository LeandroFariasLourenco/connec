import React, { useState, useEffect } from 'react';
import { Range } from 'rc-slider';
import { useDispatch, useSelector } from 'react-redux';
import 'rc-slider/assets/index.css';

import { setMonth } from '@Store/ducks/dashboard';
import Months from '@Utils/months';

import './style.scss';

import * as S from './styled';

const Slipper = () => {
  const [currentMonth, setCurrentMonth] = useState(5);
  const dispatch = useDispatch();

  const handleDispatch = (value) => {
    dispatch(setMonth(currentMonth, Months[value]));
    setCurrentMonth(value);
  };

  useEffect(() => {
    dispatch(setMonth(5, Months[5]));
  }, []);

  return (
    <S.RangeWrapper>
      <Range
        min={0}
        max={5}
        step={1}
        count={0}
        value={[currentMonth]}
        allowCross={false}
        onChange={([value]) => handleDispatch(value)}
        marks={{
          0: <S.Month>{Months[0]}</S.Month>,
          1: <S.Month>{Months[1]}</S.Month>,
          2: <S.Month>{Months[2]}</S.Month>,
          3: <S.Month>{Months[3]}</S.Month>,
          4: <S.Month>{Months[4]}</S.Month>,
          5: <S.Month>{Months[5]}</S.Month>
        }}
      />
    </S.RangeWrapper>
  );
};

export default Slipper;
