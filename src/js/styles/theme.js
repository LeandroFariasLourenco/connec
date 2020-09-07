/* eslint-disable import/no-webpack-loader-syntax */
import { generateMedia } from 'styled-media-query';
import screen from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_screen-sizes.scss';
import variables from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_variables.scss';
import typography from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_typography.scss';

import * as flex from './mixins/flex';

import { zIndex } from 'sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../scss/01-settings/_z-index.scss';
import generateIndex from './zindex';
const zIndexes = generateIndex(zIndex);

const mq = generateMedia(screen.breakpoints);

const theme = {
  ...screen,
  ...variables,
  ...typography,
  ...flex,
  zIndexes,
  mq
};

export default theme;
