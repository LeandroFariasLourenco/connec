import C from '@Constants';
import BackEndService from '../Axios/backEndService';

export const getMatches = async () =>
  await BackEndService.get('/match/receptores', {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(C.ACCESSTOKEN)}`
    }
  });
