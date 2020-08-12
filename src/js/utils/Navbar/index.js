import UserIconDefault from '@Svgs/navbar/userDefault.svg';
import UserIconActive from '@Svgs/navbar/userActive.svg';

import ChartIconDefault from '@Svgs/navbar/chartDefault.svg';
import ChartIconActive from '@Svgs/navbar/chartActive.svg';

import NotebookIconDefault from '@Svgs/navbar/notebookDefault.svg';
import NotebookIconActive from '@Svgs/navbar/notebookActive.svg';

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
