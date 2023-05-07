import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import { COLORS, FONT_FAMILY } from '../../constants/themes'

export default function CustomText({ style, children, ...props }) {
  return (
    <Text style={[styles.defaultStyle, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 16,
    color: COLORS.grey05,
    lineHeight: 24,
  },
});
