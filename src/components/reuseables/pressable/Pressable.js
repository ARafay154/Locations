import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo } from 'react';


const Pressable = ({ children,hitSlop={ top: 10, bottom: 10, left: 10, right: 10 }, onPress, style,disabled }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      hitSlop={hitSlop}
      style={style}
      onPress={() => { onPress && onPress(); }}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

export default memo(Pressable);

const styles = StyleSheet.create({});
