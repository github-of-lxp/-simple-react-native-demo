/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './store/store'
import App from './App'
import { Provider } from "react-redux"

const Store=() => {
  return (
    <>
      <Provider store={store}>     
          <App />
      </Provider>
    </>
  );
};

export default Store;
