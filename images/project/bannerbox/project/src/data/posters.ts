import { Poster } from '../types';

export const posters: Poster[] = [
  {
    id: '1',
    title: 'Business Conference',
    imageUrl: 'https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    isPremium: false
  },
  {
    id: '2',
    title: 'Summer Sale',
    imageUrl: 'https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'business',
    isPremium: false
  },
  {
    id: '3',
    title: 'Diwali Celebration',
    imageUrl: 'https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'festival',
    isPremium: false
  },
  {
    id: '4',
    title: 'Monday Motivation',
    imageUrl: 'https://images.pexels.com/photos/3808057/pexels-photo-3808057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'motivation',
    isPremium: false
  },
  {
    id: '5',
    title: 'Christmas Special',
    imageUrl: 'https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'seasonal',
    isPremium: true
  },
  {
    id: '6',
    title: 'Success Mindset',
    imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'motivation',
    isPremium: false
  },
  {
    id: '7',
    title: 'Grand Opening',
    imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    isPremium: false
  },
  {
    id: '8',
    title: 'Holi Festival',
    imageUrl: 'https://images.pexels.com/photos/4203089/pexels-photo-4203089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'festival',
    isPremium: true
  },
  {
    id: '9',
    title: 'Summer Collection',
    imageUrl: 'https://images.pexels.com/photos/1374525/pexels-photo-1374525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'seasonal',
    isPremium: false
  },
  {
    id: '10',
    title: 'Daily Inspiration',
    imageUrl: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'motivation',
    isPremium: false
  },
  {
    id: '11',
    title: 'Anniversary Sale',
    imageUrl: 'https://images.pexels.com/photos/7235681/pexels-photo-7235681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'business',
    isPremium: true
  },
  {
    id: '12',
    title: 'Wedding Event',
    imageUrl: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'event',
    isPremium: true
  }
];

export const categories = [
  { id: 'all', label: 'All Templates' },
  { id: 'event', label: 'Events' },
  { id: 'festival', label: 'Festivals' },
  { id: 'motivation', label: 'Motivation' },
  { id: 'seasonal', label: 'Seasonal' },
  { id: 'business', label: 'Business' }
];