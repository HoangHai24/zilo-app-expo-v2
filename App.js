import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider} from "react-redux";
import store from './src/store';
import Routers from './src/routes';
import 'react-native-gesture-handler';

export default () => (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor="#992627" barStyle="light-content"/>
        <SafeAreaView style={styles.container}>
          <Routers/>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
