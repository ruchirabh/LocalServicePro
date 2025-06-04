import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ServiceProvider } from '../../types';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/theme';

interface ServiceCardProps {
  provider: ServiceProvider;
  onPress: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ provider, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <Image source={{ uri: provider.image }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{provider.name}</Text>
          <Text style={styles.service}>{provider.service.charAt(0).toUpperCase() + provider.service.slice(1)}</Text>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={14} color={COLORS.gray500} />
            <Text style={styles.area}>{provider.area}</Text>
          </View>
        </View>
        <View style={styles.status}>
          <View style={[
            styles.availabilityBadge, 
            { backgroundColor: provider.availability ? COLORS.success : COLORS.error }
          ]}>
            <Text style={styles.availabilityText}>
              {provider.availability ? 'Available' : 'Busy'}
            </Text>
          </View>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.rating}>
          <Ionicons name="star" size={16} color="#fbbf24" />
          <Text style={styles.ratingText}>{provider.rating.toFixed(1)}</Text>
        </View>
        <Text style={styles.price}>{provider.price}</Text>
        <Text style={styles.experience}>{provider.experience} exp</Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.callButton}>
          <Ionicons name="call" size={16} color={COLORS.primary} />
          <Text style={styles.callText}>Call</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.sm,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: SPACING.md,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    color: COLORS.gray900,
    marginBottom: 2,
  },
  service: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: '500',
    marginBottom: 4,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  area: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.gray500,
    marginLeft: 2,
  },
  status: {
    alignItems: 'flex-end',
  },
  availabilityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  availabilityText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.white,
    fontWeight: '500',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  ratingText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.gray600,
    marginLeft: 4,
  },
  price: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.gray600,
    marginRight: SPACING.md,
  },
  experience: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.gray500,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray100,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 8,
  },
  callText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.primary,
    fontWeight: '500',
    marginLeft: 4,
  },
});