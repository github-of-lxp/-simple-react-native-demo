/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Store from './Store';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Store);
