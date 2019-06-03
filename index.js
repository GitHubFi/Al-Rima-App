/** @format */

import {AppRegistry} from 'react-native';
import App from './App/Components/App';
import {name as appName} from './app.json';
/* app.js */
import EStyleSheet from 'react-native-extended-stylesheet';
 
EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});

AppRegistry.registerComponent(appName, () => App);
