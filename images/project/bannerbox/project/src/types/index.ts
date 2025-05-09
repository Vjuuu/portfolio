export interface UserProfile {
  businessName: string;
  businessAddress: string;
  mobileNumber: string;
  logoUrl: string | null;
}

export interface Poster { 
  id: string;
  title: string;
  imageUrl: string;
  category: PosterCategory;
  isPremium: boolean;
}

export type PosterCategory = 
  | 'event' 
  | 'festival' 
  | 'motivation' 
  | 'seasonal' 
  | 'business';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  features: string[];
  isPopular?: boolean;
}