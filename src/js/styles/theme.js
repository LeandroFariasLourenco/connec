/* eslint-disable import/no-webpack-loader-syntax */
import { generateMedia } from 'styled-media-query';
import screen from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_screen-sizes.scss';
import typography from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_typography.scss';
import variables from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_variables.scss';

const mq = generateMedia(screen.breapoints);

const theme = {
  ...screen,
  ...typography,
  ...variables,
  mq
};

export default theme;
