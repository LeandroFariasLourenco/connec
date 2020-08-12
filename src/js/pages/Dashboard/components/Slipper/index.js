import React, { useState, useEffect } from 'react';
import { Range } from 'rc-slider';
import { useDispatch, useSelector } from 'react-redux';
import 'rc-slider/assets/index.css';

import { setMonth, setLoading } from '@Store/ducks/dashboard';
import Months from '@Utils/Months';

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
      setTimeout(() => {
        console.log('teste');
      }, 2000);
    } catch (e) {
      console.log(e);
    } finally {
      // dispatch(setLoading(false));
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
