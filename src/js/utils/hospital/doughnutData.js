const titles = [
  'Em Espera',
  'Doadores',
  'Receptores',
  'Completados'
];

const backgroundColors = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#008000'
];

const hoverBackgroundColors = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#008000'
];

export const legends = {
  display: true,
  fullWidth: true
};

export default {
  labels: titles,
  fullWidth: true,
  datasets: [{
    data: [300, 50, 100, 40],
    backgroundColor: backgroundColors,
    hoverBackgroundColor: hoverBackgroundColors
  }]
};
