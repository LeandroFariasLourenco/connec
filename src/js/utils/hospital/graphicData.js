import Months from './../months';
import lineChartData from './linechart';

const chartPoints = lineChartData.map(chartData => ({
  label: chartData.label,
  backgroundColor: chartData.backgroundColor,
  borderColor: chartData.borderColor,
  pointBorderColor: chartData.pointBorderColor,
  pointHoverBackgroundColor: chartData.pointHoverBackgroundColor,
  pointHoverBorderColor: chartData.pointHoverBorderColor,
  data: chartData.data,
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
}));

const data = {
  labels: [
    Months[0].name,
    Months[1].name,
    Months[2].name,
    Months[3].name,
    Months[4].name,
    Months[5].name],
  datasets: chartPoints
};

export default data;
