// src/utils/helpers.ts
import { ServiceProvider, ServiceType } from '../types';

/**
 * Formats phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as +91 XXXXX XXXXX for Indian numbers
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+91 ${cleaned.slice(2, 7)} ${cleaned.slice(7)}`;
  }
  
  // Return original if doesn't match expected format
  return phone;
};

/**
 * Capitalizes first letter of each word
 */
export const capitalizeWords = (str: string): string => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Gets service type color
 */
export const getServiceColor = (service: ServiceType): string => {
  const colors = {
    plumber: '#3b82f6',
    electrician: '#f59e0b',
    mechanic: '#ef4444',
    carpenter: '#8b5cf6',
    painter: '#10b981',
  };
  
  return colors[service] || '#64748b';
};

/**
 * Formats rating to display with appropriate precision
 */
export const formatRating = (rating: number): string => {
  if (rating >= 4.5) return rating.toFixed(1);
  if (rating >= 4.0) return rating.toFixed(1);
  return rating.toFixed(1);
};

/**
 * Calculates distance between two coordinates (mock implementation)
 */
export const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  // Simplified distance calculation (in km)
  // In a real app, you'd use a proper geolocation library
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

/**
 * Filters providers based on multiple criteria
 */
export const filterProviders = (
  providers: ServiceProvider[],
  filters: {
    service?: ServiceType;
    area?: string;
    minRating?: number;
    availableOnly?: boolean;
    maxPrice?: number;
  }
): ServiceProvider[] => {
  return providers.filter(provider => {
    if (filters.service && provider.service !== filters.service) {
      return false;
    }
    
    if (filters.area && !provider.area.toLowerCase().includes(filters.area.toLowerCase())) {
      return false;
    }
    
    if (filters.minRating && provider.rating < filters.minRating) {
      return false;
    }
    
    if (filters.availableOnly && !provider.availability) {
      return false;
    }
    
    if (filters.maxPrice) {
      // Extract max price from range string (e.g., "₹300-500/hr" -> 500)
      const priceMatch = provider.price.match(/₹\d+-(\d+)/);
      if (priceMatch) {
        const maxProviderPrice = parseInt(priceMatch[1]);
        if (maxProviderPrice > filters.maxPrice) {
          return false;
        }
      }
    }
    
    return true;
  });
};

/**
 * Sorts providers by different criteria
 */
export const sortProviders = (
  providers: ServiceProvider[],
  sortBy: 'rating' | 'price' | 'experience' | 'name'
): ServiceProvider[] => {
  return [...providers].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      
      case 'price':
        // Extract starting price for comparison
        const priceA = parseInt(a.price.match(/₹(\d+)/)?.[1] || '0');
        const priceB = parseInt(b.price.match(/₹(\d+)/)?.[1] || '0');
        return priceA - priceB;
      
      case 'experience':
        const expA = parseInt(a.experience.match(/(\d+)/)?.[1] || '0');
        const expB = parseInt(b.experience.match(/(\d+)/)?.[1] || '0');
        return expB - expA;
      
      case 'name':
        return a.name.localeCompare(b.name);
      
      default:
        return 0;
    }
  });
};

/**
 * Debounce function for search input
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Generates a random ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Validates phone number format
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+91\s?\d{5}\s?\d{5}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Gets time-based greeting
 */
export const getGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
};