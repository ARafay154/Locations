import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import store from './src/redux/store/Store'
import { isIOS } from './src/utils/MyUtils'
import { COLOR } from './src/enums/StyleGuide'
import RootNavigation from './src/navigation/RootNavigation'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
       
        {isIOS ?
          <SafeAreaView style={{ backgroundColor: COLOR.red }}></SafeAreaView>
          :
          null
        }

        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={COLOR.red} barStyle={isIOS ? "light-content" : "light-content"} />
          <RootNavigation />
        </View>
      </Provider>
  )
}

export default App

const styles = StyleSheet.create({})