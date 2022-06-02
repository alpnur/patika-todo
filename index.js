/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

Array.prototype.deleteItem = function (method) {
  const arr = this;
  const arrr = JSON.parse(JSON.stringify(arr));
  const findIndex = arrr.findIndex(method);
  arrr.splice(findIndex, 1);
  return arrr;
};

AppRegistry.registerComponent(appName, () => App);
