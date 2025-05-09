import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import PosterGrid from '../components/poster/PosterGrid';
import { posters } from '../data/posters';
import { getUserProfile } from '../utils/storage';

const HomePage: React.FC = () => {
  const [hasProfile, setHasProfile] = useState(false);
  
  useEffect(() => {
    const profile = getUserProfile();
    setHasProfile(!!profile);
  }, []);
  
  // Limited posters for home page
  const featuredPosters = posters.slice(0, 5);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Create beautiful business posters in minutes
              </h1>
              <p className="text-xl text-blue-100">
                Design professional posters for your business with our easy-to-use templates. No design experience needed.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/categories">
                  <Button variant="secondary" size="lg">
                    Browse Templates
                  </Button>
                </Link>
                {!hasProfile && (
                  <Link to="/profile">
                    <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                      Complete Your Profile
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -right-16 -top-16 w-72 h-72 bg-blue-500 rounded-full opacity-20 mix-blend-multiply"></div>
              <div className="absolute -left-16 -bottom-16 w-72 h-72 bg-blue-400 rounded-full opacity-20 mix-blend-multiply"></div>
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Poster example" 
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Featured Templates Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Templates</h2>
            <Link to="/categories" className="text-blue-600 hover:text-blue-800 flex items-center">
              View All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <PosterGrid posters={featuredPosters} />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose PosterMaker</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Create professional posters without the hassle of complex design software
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
              <p className="text-gray-600">Our templates are easy to customize with your business information and branding</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-amber-100 p-3 rounded-full mb-4">
                <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ready in Minutes</h3>
              <p className="text-gray-600">Create stunning posters in minutes, not hours. Save time and focus on your business</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Results</h3>
              <p className="text-gray-600">Get professional-looking results every time with our curated templates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Users Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "PosterMaker has made creating professional posters for my business so easy. I love how I can save my business info and quickly create new designs."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-semibold">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-semibold">Happy Customer {i}</h4>
                    <p className="text-xs text-gray-500">Small Business Owner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create your first poster?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get started with hundreds of professionally designed templates
          </p>
          <Link to="/categories">
            <Button variant="secondary" size="lg">
              Start Creating Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;