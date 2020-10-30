import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

import { getPatient } from '@Requests/Patient';

import { getBloodType, getOrgan } from '@Utils/PatientInfo';

import Placeholder from '@Images/lazyload/placeholder.jpg';

import { ReactComponent as BloodTypeIcon } from '@Icons/patient/bloodtype.svg';

import 'lazysizes';

const UserNotificationInfo = ({
  organName,
  userType,
  userId
}) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getPatient(`${userType}es/${userId}`)
      .then((response) => {
        setUser(response.data);
        return response;
      }, (err) => err);
  }, []);

  return (
    <S.InfoWrapper>
      <S.UserType>
        <span>
          {userType}
        </span>

        <S.UserInfo>
          <S.ReceiverThumb
            data-sizes='auto'
            data-src={Placeholder}
            className='lazyload'
            src={user.foto || Placeholder}
          />
          {user.nome}

        </S.UserInfo>
      </S.UserType>
      <S.OrganInfo>
        {getOrgan(organName)}
        {organName}
      </S.OrganInfo>

      <S.BloodType>
        <BloodTypeIcon />
        {getBloodType(user.tipoSanguineo)}
      </S.BloodType>
    </S.InfoWrapper>
  );
};

UserNotificationInfo.propTypes = {
  userType: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  organName: PropTypes.string.isRequired
};

export default UserNotificationInfo;
