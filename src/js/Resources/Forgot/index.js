import Security from '@Icons/login/security.svg';
import User from '@Icons/login/user.svg';

export default [
  {
    id: 1,
    icon: User,
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
    icon: Security,
    type: 'token',
    maxLength: 10,
    name: 'token',
    required: true,
    identifier: 'tokenId',
    placeholder: 'Token recebido no email'
  }
];
