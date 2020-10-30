import Months from '@Resources/Months';
import { getAnalytic } from '@Requests/Analytic';

export const getData = (month, year, chartLabel) => (
  Months.map(async (singleMonth, i) =>
    await getAnalytic((month + 1) - (i + 1), year)
      .then((response) => {
        if (chartLabel === 'Doadores') return response.data.totalDoadores;
        return response.data.totalReceptores;
      })
  )
);

export default [
  {
    label: 'Doadores',
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)'
  },
  {
    label: 'Receptores',
    backgroundColor: 'rgba(255,206,86,0.4)',
    borderColor: 'rgba(255,206,86,1)',
    pointBorderColor: 'rgba(255,206,86,1)',
    pointHoverBackgroundColor: 'rgba(255,206,86,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)'
  }
];
