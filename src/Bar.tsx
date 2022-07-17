import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type BarProps = {
  barStyle?: object;
  barContainerStyle?: object;
};

export const Bar = ({ barStyle, barContainerStyle }: BarProps) => {
  return (
    <View style={[BarStyles.barContainer, barContainerStyle]}>
      <View style={[BarStyles.bar, barStyle]} />
    </View>
  );
};

const BarStyles = StyleSheet.create({
  barContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    width: 56,
    height: 4,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});
