import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { SearchBar } from '../components/ui/SearchBar';
import { ServiceList } from '../components/features/ServiceList';
import { AppHeader } from '../components/ui/AppHeader'; // Add this import
import { ServiceProvider } from '../types';
import { COLORS } from '../constants/theme';

export const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleProviderPress = (provider: ServiceProvider) => {
    router.push(`/service/${provider.id}`);
  };

  const handleProfilePress = () => {
    Alert.alert(
      'Login Required',
      'Please login to access your profile',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Login',
          onPress: () => {
            router.push('/profile');
            console.log('Navigate to login screen');
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader /> {/* Add the header component */}
      <View style={styles.content}>
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search plumbers, electricians..."
          onProfilePress={handleProfilePress}
        />
        <ServiceList
          searchQuery={searchQuery}
          onProviderPress={handleProviderPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray100,
  },
  content: {
    flex: 1,
    paddingTop: 5 
  },
});