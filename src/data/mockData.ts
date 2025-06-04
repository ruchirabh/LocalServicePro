import { ServiceProvider } from '../types';

export const MOCK_PROVIDERS: ServiceProvider[] = [
  {
    id: '1',
    name: 'Alejandro Torres',
    service: 'Plumber',
    area: 'Guadalajara',
    price: '$20-25/hr',
    rating: 4.8,
    phone: '+91 98765 43210',
    experience: '8 years',
    description: 'Expert in pipe fitting, leak repairs, and bathroom installations. Available 24/7 for emergency services.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    availability: true,
  },
  {
    id: '2',
    name: 'Camila Rodríguez',
    service: 'Electrician',
    area: 'Monterrey',
    price: '$12-15/hr',
    rating: 4.6,
    phone: '+52 222 5566 7788',
    experience: '12 years',
    description: 'Licensed electrician specializing in home wiring, appliance installation, and electrical repairs.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    availability: true,
  },  
  {
    id: '3',
    name: 'Auto Care Garage',
    service: 'Mechanic',
    area: '	Tijuana',
    price: '$18-25/hr',
    rating: 4.5,
    phone: '+52 664 1122 3344',
    experience: '15 years',
    description: 'Complete vehicle servicing, engine repair, and maintenance for all car models.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150',
    availability: false,
  },
  {
    id: '4',
    name: 'Santiago Morales plumbings',
    service: 'Plumber',
    area: 'Puebla',
    price: '$30/hr',
    rating: 4.7,
    phone: '+52 55 1234 5678',
    experience: '6 years',
    description: 'Specialized in kitchen and bathroom plumbing, water heater installation.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    availability: true,
  },
  {
    id: '5',
    name: 'Diego Hernández Electric',
    service: 'Electrician',
    area: 'Mérida',
    price: '₹350-550/hr',
    rating: 4.9,
    phone: '+52 81 2345 6789',
    experience: '10 years',
    description: 'Expert in smart home installations, LED lighting, and electrical safety audits.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    availability: true,
  },
  // Add more providers for infinite scroll testing
...Array.from({ length: 20 }, (_, i) => {
  const uniqueId = `${Date.now()}-${i + 6}`; // More unique ID
  return {
    id: uniqueId,
    name: `Service Provider ${i + 6}`,
    service: ['Plumber', 'Electrician', 'Mechanic'][i % 3] as any,
    area: ['	León', 'Toluca', ' Cancún', 'San Luis Potosí', 'Monterrey'][i % 5],
    price: `$${20 + (i * 5)}-${40+ (i * 5)}/hr`,
    rating: parseFloat((3.5 + (Math.random() * 1.5)).toFixed(1)), // Ensure consistent decimal
    phone: `+91 ${Math.floor(10000 + Math.random() * 90000)} ${Math.floor(10000 + Math.random() * 90000)}`,
    experience: `${Math.floor(Math.random() * 15) + 1} years`,
    description: `Professional ${['plumber', 'electrician', 'mechanic'][i % 3]} with quality service guarantee.`,
    image: `https://picsum.photos/seed/${uniqueId}/150`, // More reliable image URL
    availability: Math.random() > 0.3,
  };
}),
];

export const getProvidersByService = (service: string): ServiceProvider[] => {
  return MOCK_PROVIDERS.filter(provider => 
    provider.service.toLowerCase().includes(service.toLowerCase()) ||
    provider.name.toLowerCase().includes(service.toLowerCase())
  );
};

export const getRandomProviders = (count: number, excludeId?: string): ServiceProvider[] => {
  const filtered = excludeId 
    ? MOCK_PROVIDERS.filter(p => p.id !== excludeId)
    : MOCK_PROVIDERS;
  
  return filtered
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
};

function validateMockData() {
  const ids = MOCK_PROVIDERS.map(p => p.id);
  const uniqueIds = new Set(ids);
  
  if (ids.length !== uniqueIds.size) {
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    console.error('Duplicate IDs found:', duplicates);
    throw new Error('Mock data contains duplicate IDs');
  }
  
  console.log('Mock data validation passed - all IDs are unique');
}


validateMockData();