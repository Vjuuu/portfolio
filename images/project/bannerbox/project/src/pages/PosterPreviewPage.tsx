import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Lock, ChevronLeft } from 'lucide-react';
import Button from '../components/ui/Button';
import Card, { CardContent } from '../components/ui/Card';
import { posters } from '../data/posters';
import { getUserProfile } from '../utils/storage';
import { UserProfile } from '../types';

const PosterPreviewPage: React.FC = () => { 
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const poster = posters.find(p => p.id === id);
  
  useEffect(() => {
    const userProfile = getUserProfile();
    setProfile(userProfile);
  }, []);
  
  if (!poster) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Poster not found</h2>
        <p className="mt-2 text-gray-600">The poster you're looking for doesn't exist.</p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/categories')}
          className="mt-4"
        >
          Browse Posters
        </Button>
      </div>
    );
  }
  
  const handleDownload = () => {
    if (poster.isPremium) {
      navigate('/subscription');
      return;
    }
    
    setIsDownloading(true);
    
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, this would trigger an actual download
      alert('Your poster has been downloaded successfully!');
    }, 1500);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to templates
      </button>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src={poster.imageUrl} 
              alt={poster.title} 
              className="w-full object-cover"
            />
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{poster.title}</h1>
          
          <div className="flex items-center mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {poster.category.charAt(0).toUpperCase() + poster.category.slice(1)}
            </span>
            {poster.isPremium && (
              <span className="ml-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                <Lock className="h-3.5 w-3.5 mr-1" />
                Premium
              </span>
            )}
          </div>
          
          <div className="prose mb-8">
            <p>
              This beautiful poster template is perfect for your business. It features a professional design that will catch the attention of your customers.
            </p>
            <p>
              Customize it with your business information and download it in high resolution for printing or digital use.
            </p>
          </div>
          
          {poster.isPremium ? (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-amber-800 flex items-center">
                <Lock className="h-4 w-4 mr-2" />
                Premium Template
              </h3>
              <p className="text-amber-700 text-sm mt-1">
                This is a premium template. Upgrade to access this and other premium templates.
              </p>
              <Button 
                variant="secondary" 
                className="mt-3"
                onClick={() => navigate('/subscription')}
              >
                View Plans
              </Button>
            </div>
          ) : (
            <Button 
              variant="primary"

              onClick={handleDownload}
              isLoading={isDownloading}
              className="mb-6"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Poster
            </Button>
          )}
          
          {profile ? (
            <Card>
              <CardContent>
                <h3 className="font-semibold text-gray-800 mb-2">Your Business Information</h3>
                <p className="text-sm text-gray-600">
                  This information will be used in your poster:
                </p>
                <div className="mt-3 text-sm">
                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-gray-500">Business name:</span>
                    <span className="col-span-2 font-medium">{profile.businessName}</span>
                    
                    <span className="text-gray-500">Address:</span>
                    <span className="col-span-2 font-medium">{profile.businessAddress}</span>
                    
                    <span className="text-gray-500">Contact:</span>
                    <span className="col-span-2 font-medium">{profile.mobileNumber}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <h3 className="font-semibold text-gray-800 mb-2">Business Information Missing</h3>
                <p className="text-sm text-gray-600">
                  Complete your business profile to automatically include your information in your posters.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-3"
                  onClick={() => navigate('/profile')}
                >
                  Complete Profile
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default PosterPreviewPage;