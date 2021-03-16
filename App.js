/* eslint-disable no-use-before-define */
/**

 * @formatss
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text> Teste {4 + ((4 * 96) / 2) * 3}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
