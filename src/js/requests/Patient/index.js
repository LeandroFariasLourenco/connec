import C from '@Constants';
import BackEndService from '../Axios/backEndService';

/**
 * @param {string} endpoint
 * @param {integer} id
 * @example getPatient(receptores, 1)
 * @description will return values for the patient of the specified id or all patients if no id's passed
*/
export const getPatient = async (endpoint, id = undefined) =>
  await BackEndService.get(`/${endpoint}${!id ? '' : `/${id}`}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });

/**
 * @param {string} endpoint
 * @param {object} user
 * @example postPatient('receptores', {nome, sobrenome, dataNascimento...})
 * @description We spread the object that needs to contain the same structure as the api
 */
export const postPatient = async (endpoint, { patient }) =>
  await BackEndService.post(`/${endpoint}`, patient, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });

export const updatePatient = async (endpoint, { patient }) =>
  await BackEndService.put(`/${endpoint}`, patient, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });

export const getPatientWaiting = async () =>
  await BackEndService.get('/match/receptores?status=AGUARDANDO', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });

export const updatePatientDonating = async (patient) =>
  await BackEndService.post('/match/receptores/status', patient, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });
