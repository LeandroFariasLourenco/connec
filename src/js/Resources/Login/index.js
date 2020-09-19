import Security from '@Icons/login/security.svg';
import User from '@Icons/login/user.svg';

export default [
  {
    id: 1,
    icon: Security,
    type: 'email',
    maxLength: 100,
    name: 'email',
    pattern: /[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ@]/gi,
    required: true,
    identifier: 'emailId',
    placeholder: 'Email...'
  },
  {
    id: 2,
    icon: User,
    type: 'password',
    maxLength: 30,
    name: 'password',
    required: true,
    identifier: 'passwordId',
    placeholder: 'Senha...'
  }
];
