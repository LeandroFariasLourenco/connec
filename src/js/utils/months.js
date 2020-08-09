const months = ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
  'Outubro', 'Novembro', 'Dezembro'];

export default Array.prototype.map.call([5, 4, 3, 2, 1, 0],
  (month) => new Date().getMonth() - month)
  .map(numMonth => months[numMonth]);
