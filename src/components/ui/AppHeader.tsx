import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { COLORS, FONT_SIZES, SPACING } from '../../constants/theme';

export const AppHeader: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.title}>LocalServicePro</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingTop: SPACING.xl, 
    paddingBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});