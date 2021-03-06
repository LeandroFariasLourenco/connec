import React, { useState, useEffect } from 'react';
import { Range } from 'rc-slider';
import { useDispatch, useSelector } from 'react-redux';

import { setMonth, setLoading } from '@Store/ducks/dashboard';
import Months from '@Resources/Months';

import 'rc-slider/assets/index.css';
import './style.scss';

import * as S from './styled';

const Slipper = () => {
  const [currentMonth, setCurrentMonth] = useState(5);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.dashboard);

  const handleDispatch = (value) => {
    const { name, number } = Months[value];
    dispatch(setMonth(number, name));
    setCurrentMonth(value);
  };

  useEffect(() => {
    const { name, number } = Months[5];

    dispatch(setMonth(number, name));
  }, []);

  const handleLoading = () => {
    dispatch(setLoading(true));

    try {
    } catch (e) {
    } finally {
      setTimeout(() => {
        dispatch(setLoading(false));
      }, 2000);
    }
  };

  return (
    <S.RangeWrapper>
      <Range
        min={0}
        max={5}
        step={1}
        count={0}
        disabled={isLoading}
        value={[currentMonth]}
        allowCross={false}
        onAfterChange={() => handleLoading()}
        onChange={([value]) => handleDispatch(value)}
        marks={{
          0: <S.Month>{Months[0].name}</S.Month>,
          1: <S.Month>{Months[1].name}</S.Month>,
          2: <S.Month>{Months[2].name}</S.Month>,
          3: <S.Month>{Months[3].name}</S.Month>,
          4: <S.Month>{Months[4].name}</S.Month>,
          5: <S.Month>{Months[5].name}</S.Month>
        }}
      />
    </S.RangeWrapper>
  );
};

export default Slipper;
