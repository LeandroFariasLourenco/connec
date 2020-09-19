import BackEndService from '../Axios/backEndService';

/**
 * @param {integer} id
 * @example getReceivers(1) => will return values for the receiver of the specified id or all receivers if no id's passed
*/
export const getReceivers = async (id = undefined) =>
  await BackEndService.get(`/receptores${!id ? '' : `/${id}`}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }
  });
