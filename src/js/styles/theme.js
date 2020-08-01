/* eslint-disable import/no-webpack-loader-syntax */
import { generateMedia } from 'styled-media-query';
import screen from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_screen-sizes.scss';

const mq = generateMedia(screen.breapoints);

const theme = {
  ...screen,
  mq
};

export default theme;
