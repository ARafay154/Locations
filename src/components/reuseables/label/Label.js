import { StyleSheet, Text } from 'react-native';
import React, { memo } from 'react';
import { COLOR, TEXT_STYLE } from '../../../enums/StyleGuide';



const Label = ({ children, style, color = COLOR.black,...rest }) => {
  return (
    <Text
      allowFontScaling={false}
      style={[styles.textStyle, { color }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default memo(Label);

const styles = StyleSheet.create({
  textStyle: {
    ...TEXT_STYLE.text,
  },
});
