import React from 'react';

import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
import Providers from './navigation';

const App = () => {
  LogBox.ignoreAllLogs();
  return <Providers></Providers>;
  // return <TestScreen></TestScreen>;
};
export default App;
