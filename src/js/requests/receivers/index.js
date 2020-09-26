import C from '@Constants';
import BackEndService from '../Axios/backEndService';

/**
 * @param {integer} id
 * @example getReceivers(1)
 * @description will return values for the receiver of the specified id or all receivers if no id's passed
*/
export const getReceivers = async (id = undefined) =>
  await BackEndService.get(`/receptores${!id ? '' : `/${id}`}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`,
      'Cache-Control': 'only-if-cached'
    }
  });

/**
 * @param {object} user
 * @example postReceivers({nome, sobrenome, dataNascimento...})
 * @description We spread the object that needs to contain the same structure as the api
 */
export const postReceivers = async ({ receiver }) =>
  await BackEndService.post('/receptores', receiver, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });
