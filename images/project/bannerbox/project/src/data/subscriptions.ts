import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'monthly',
    features: [
      'Access to 10+ basic templates',
      'Download in standard quality',
      'Add business information',
      'Basic customization options'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9.99,
    period: 'monthly',
    isPopular: true,
    features: [
      'Access to 50+ premium templates',
      'Download in high quality',
      'Custom fonts and colors',
      'Remove watermark',
      'Priority support'
    ]
  },
  {
    id: 'business',
    name: 'Business',
    price: 19.99,
    period: 'monthly',
    features: [
      'Access to 100+ premium templates',
      'Download in ultra-high quality',
      'Custom fonts and colors',
      'Remove watermark',
      'Priority support',
      'Team collaboration',
      'Brand kit integration'
    ]
  }
];