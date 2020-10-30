import Months from '@Resources/Months';
import lineChartData, { getData } from './linechart';

const chartPoints = (month, year) => lineChartData.map(async (chartData) => {
  let dataForChart;

  await Promise.all(getData(month, year, chartData.label)).then((analytic) => {
    dataForChart = {
      label: chartData.label,
      backgroundColor: chartData.backgroundColor,
      borderColor: chartData.borderColor,
      pointBorderColor: chartData.pointBorderColor,
      pointHoverBackgroundColor: chartData.pointHoverBackgroundColor,
      pointHoverBorderColor: chartData.pointHoverBorderColor,
      data: analytic.reverse(),
      fill: false,
      lineTension: 0.1,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10
    };
  });
  return dataForChart;
});

const data = async (month, year) => {
  return Promise.all(chartPoints(month, year)).then((chartObjectArr) => {
    return ({
      labels: [
        Months[0].name,
        Months[1].name,
        Months[2].name,
        Months[3].name,
        Months[4].name,
        Months[5].name],
      datasets: chartObjectArr
    });
  });
};

export default data;
