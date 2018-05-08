import React from 'react';
import { AppRegistry } from 'react-native';

import Root from './src/components/Root';
import createStore from './src/redux/createStore';

const store = createStore();

const App = () => <Root store={store} />;

AppRegistry.registerComponent('ReactNativeStarter', () => App);
