import C from '@Constants';
import BackEndService from '../Axios/backEndService';

export const getAnalytic = async (month, year) =>
  await BackEndService.get(`/analiticos/pacientes?mes=${month + 1}&ano=${year}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });
