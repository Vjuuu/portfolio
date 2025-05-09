import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PosterMaker</h3>
            <p className="text-gray-300">
              Create beautiful posters for your business with our easy-to-use poster maker app.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/categories" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
              <li><a href="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</a></li>
              <li><a href="/subscription" className="text-gray-300 hover:text-white transition-colors">Subscription</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">
              Have questions or feedback? Reach out to us at support@postermaker.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-center">&copy; {new Date().getFullYear()} PosterMaker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;