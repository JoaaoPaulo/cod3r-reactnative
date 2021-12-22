/**
*@format
 */

import { AppRegistry } from "react-native";
import App from './src/app';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { name as appName } from ".app.json";

AppRegistry.registerComponent(appName, () => App)