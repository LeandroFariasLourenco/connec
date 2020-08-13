import Cookie from 'js-cookie';

const Validations = {
  setupCookie: () => {
    Cookie.set('sessionLogged', true, { expires: 0.10 });
  },

  getCookie: () => Cookie.get('sessionLogged'),

  deleteCookie: () => {
    Cookie.remove('sessionLogged');
  }
};

export default Validations;
