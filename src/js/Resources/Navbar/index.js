import UserIconDefault from '@Icons/navbar/userDefault.svg';
import UserIconActive from '@Icons/navbar/userActive.svg';

import ChartIconDefault from '@Icons/navbar/chartDefault.svg';
import ChartIconActive from '@Icons/navbar/chartActive.svg';

import NotebookIconDefault from '@Icons/navbar/notebookDefault.svg';
import NotebookIconActive from '@Icons/navbar/notebookActive.svg';

export default [
  {
    id: 1,
    title: 'Dashboard',
    pathname: '/dashboard',
    iconDefault: ChartIconDefault,
    iconActive: ChartIconActive
  },
  {
    id: 2,
    title: 'Receptores',
    pathname: '/receptores',
    iconDefault: UserIconDefault,
    iconActive: UserIconActive
  },
  {
    id: 3,
    title: 'Doadores',
    pathname: '/doadores',
    iconDefault: UserIconDefault,
    iconActive: UserIconActive
  },
  {
    id: 4,
    title: 'Histórico',
    pathname: '/historico',
    iconDefault: NotebookIconDefault,
    iconActive: NotebookIconActive
  }
];
