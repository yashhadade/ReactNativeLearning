import { StyleSheet, Text } from 'react-native';
import React, { PropsWithChildren } from 'react';

type IconProps = PropsWithChildren<{
  name: string;
  size?: number;
  color?: string;
}>;

const Icons = ({ name, size = 38, color = '#F7CD2E' }: IconProps) => {
  switch (name) {
    case 'circle':
      return <Text style={[styles.icon, { fontSize: size, color: '#38CC77' }]}>⭕</Text>;
    case 'cross':
      return <Text style={[styles.icon, { fontSize: size, color: '#FF6B6B' }]}>❌</Text>;
    default:
      return <Text style={[styles.icon, { fontSize: size, color: '#CCCCCC' }]}>✏️</Text>;
  }
};

export default Icons;

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
