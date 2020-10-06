import C from '@Constants/';
import BackEndService from '../Axios/backEndService';

/**
 * @param {object} user
 * @example {
 *  email: 'leandro.farias01@outlook.com',
 *  password: 'teste',
 * };
 */
export const postAuthentication = async (user) => {
  await BackEndService.post('/auth', user).then(({ data: { accessToken: token } }) => {
    sessionStorage.setItem(C.ACCESSTOKEN, token);
    BackEndService.defaults.headers.common.Authorization = token;
  });
};
