import React from 'react';
import Card, { CardHeader, CardContent } from '../components/ui/Card';
import ProfileForm from '../components/profile/ProfileForm';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Business Profile</h1>
      
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-800">Your Business Information</h2>
          <p className="text-gray-600 mt-1">
            This information will be used to automatically fill in your posters
          </p>
        </CardHeader>
        <CardContent>
          <ProfileForm />
        </CardContent>
      </Card>
      
      <div className="mt-10 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-3">Why complete your profile?</h2>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Save time by automatically filling in your business details on all posters
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Create consistent branding across all your marketing materials
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Your information is stored locally on your device for privacy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;