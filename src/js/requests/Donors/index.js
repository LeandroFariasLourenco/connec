import BackEndService from '../Axios/backEndService';

/**
 * @param {integer} id
 * @example getDonors(1) => will return values for the receiver of the specified id or all receivers if no id's passed
*/
export const getDonors = async (id = undefined) =>
  await BackEndService.get(`/doadores${!id ? '' : `/${id}`}`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
    }
  });
