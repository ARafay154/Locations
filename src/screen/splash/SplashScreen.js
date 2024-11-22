import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR, commonStyles, hp, TEXT_STYLE, wp } from '../../enums/StyleGuide'
import { CustomIcon, Label } from '../../components'
import { SCREENS } from '../../enums/AppEnums'

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(SCREENS.HOME);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <CustomIcon family='FontAwesome5' name={"location-arrow"} size={hp(8)} />
      <Label style={styles.textStyle}>LOCATIONS</Label>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    ...commonStyles.center,
    backgroundColor:COLOR.white
  },
  textStyle: {
    marginLeft: wp(2),
    letterSpacing: 5,
    ...TEXT_STYLE.smallTitleBold,
    color: COLOR.red
  }
})