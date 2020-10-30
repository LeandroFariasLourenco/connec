
import C from '@Constants';

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
    pathname: C.PATHS.DASHBOARD,
    iconDefault: ChartIconDefault,
    iconActive: ChartIconActive
  },
  {
    id: 2,
    title: 'Receptores',
    pathname: C.PATHS.RECEPTORES,
    iconDefault: UserIconDefault,
    iconActive: UserIconActive
  },
  {
    id: 3,
    title: 'Doadores',
    pathname: C.PATHS.DOADORES,
    iconDefault: UserIconDefault,
    iconActive: UserIconActive
  },
  {
    id: 4,
    title: 'Histórico',
    pathname: C.PATHS.HISTORICO,
    iconDefault: NotebookIconDefault,
    iconActive: NotebookIconActive
  }
];
