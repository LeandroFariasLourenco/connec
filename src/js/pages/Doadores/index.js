import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setDonors } from '@Store/ducks/donors';

import Container from '@Layouts/Container';
import ListWrapper from '@Layouts/ListWrapper';

import { getDonors } from '@Requests/Donors';

const Doadores = () => {
  const dispatch = useDispatch();
  const [donorsList, setDonorsList] = useState([]);

  useEffect(() => {
    getDonors()
      .then(({ data }) => {
        setDonorsList(data);

        dispatch(setDonors({
          count: data.length,
          monthsCount: data.length
        }));
      })
      .catch(console.log);
  }, []);

  return (
    <Container>
      {!!donorsList.length && (
        <ListWrapper
          title='Doador'
          data={donorsList}
          redirect='doadores'
          storeValue='donors'
        />
      )}
    </Container>
  );
};

export default Doadores;
