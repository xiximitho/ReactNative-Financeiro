/* eslint-disable no-use-before-define */
/**

 * @formatss
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import Login from './src/componentes/login';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text> TTT {4 + ((4 * 96) / 2) * 3}</Text>
          <Login props1="User222" props2="Senha22" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
