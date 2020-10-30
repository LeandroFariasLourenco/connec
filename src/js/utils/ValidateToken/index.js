import C from '@Constants';

const hasAccessToken = () => !!sessionStorage.getItem(C.ACCESSTOKEN);

export default hasAccessToken;
