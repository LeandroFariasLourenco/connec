const titles = [
  'Doadores',
  'Receptores'
];

const backgroundColors = [
  '#36A2EB',
  '#FFCE56'
];

const hoverBackgroundColors = [
  '#36A2EB',
  '#FFCE56'
];

export const legends = {
  display: true,
  fullWidth: true
};

export default (receiverCount, donorCount) => ({
  labels: titles,
  fullWidth: true,
  datasets: [{
    data: [receiverCount, donorCount],
    backgroundColor: backgroundColors,
    hoverBackgroundColor: hoverBackgroundColors
  }]
});
