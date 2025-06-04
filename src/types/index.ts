export interface ServiceProvider {
  id: string;
  name: string;
  service: string;
  area: string;
  price: string;
  rating: number;
  phone: string;
  experience: string;
  description: string;
  image: string;
  availability: boolean;
}

export type ServiceType = 'plumber' | 'electrician' | 'mechanic' | 'carpenter' | 'painter';