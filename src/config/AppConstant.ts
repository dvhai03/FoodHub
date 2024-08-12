/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('screen').width;
const UI_WIDTH = 375;

export function appSize(size: number) {
  return (windowWidth * size) / UI_WIDTH;
}
