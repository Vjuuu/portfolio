import React, { useState, useEffect } from 'react';
import { Upload, Camera } from 'lucide-react';
import Button from '../ui/Button';
import { UserProfile } from '../../types';
import { getUserProfile, saveUserProfile } from '../../utils/storage';

const ProfileForm: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    businessName: '',
    businessAddress: '',
    mobileNumber: '',
    logoUrl: null,
  });
  
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedProfile = getUserProfile();
    if (savedProfile) {
      setProfile(savedProfile);
      if (savedProfile.logoUrl) {
        setPreviewLogo(savedProfile.logoUrl);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
    if (isSaved) setIsSaved(false);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewLogo(result);
        setProfile(prev => ({ ...prev, logoUrl: result }));
        if (isSaved) setIsSaved(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      saveUserProfile(profile);
      setIsSubmitting(false);
      setIsSaved(true);
      
      // Reset saved status after 3 seconds
      setTimeout(() => setIsSaved(false), 3000);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className={`w-40 h-40 rounded-full overflow-hidden border-2 ${previewLogo ? 'border-blue-500' : 'border-gray-300 border-dashed'} flex items-center justify-center bg-gray-50`}>
                {previewLogo ? (
                  <img 
                    src={previewLogo} 
                    alt="Business Logo" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="h-12 w-12 text-gray-400" />
                )}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <label 
                  htmlFor="logo-upload" 
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 cursor-pointer"
                >
                  <Upload className="h-5 w-5" />
                  <span className="sr-only">Upload logo</span>
                </label>
              </div>
            </div>
            <input 
              id="logo-upload" 
              type="file" 
              className="hidden" 
              accept="image/*" 
              onChange={handleLogoUpload}
            />
            <p className="mt-2 text-sm text-gray-500">Upload your business logo</p>
          </div>
        </div>
        
        <div className="w-full md:w-2/3 space-y-4">
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={profile.businessName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Your Business Name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700">
              Business Address
            </label>
            <textarea
              id="businessAddress"
              name="businessAddress"
              rows={3}
              value={profile.businessAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Your Business Address"
              required
            />
          </div>
          
          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={profile.mobileNumber}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Your Mobile Number"
              required
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              variant="primary" 
              isLoading={isSubmitting}
            >
              Save Profile
            </Button>
            
            {isSaved && (
              <span className="ml-3 text-green-600 inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Profile saved successfully!
              </span>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;