import { UserProfile } from '../types';

const USER_PROFILE_KEY = 'poster_maker_user_profile';

export const saveUserProfile = (profile: UserProfile): void => {
  localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
};

export const getUserProfile = (): UserProfile | null => {
  const profileData = localStorage.getItem(USER_PROFILE_KEY);
  return profileData ? JSON.parse(profileData) : null;
};

export const clearUserProfile = (): void => {
  localStorage.removeItem(USER_PROFILE_KEY);
};