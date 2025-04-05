
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-theme-purple to-purple-700 text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-theme-coral/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-theme-teal/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Discover, Connect, and Experience Campus Life
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-xl mx-auto lg:mx-0">
              Your gateway to all campus events, activities, and opportunities in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="bg-white text-theme-purple hover:bg-gray-100">
                <Link to="/events">
                  Explore Events
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/signup">
                  Create Account
                </Link>
              </Button>
            </div>
            
            <div className="relative mt-8 max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for events, clubs, or interests..."
                className="block w-full pl-10 pr-4 py-3 border border-transparent rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm">
              <div>
                <span className="block text-3xl font-bold">500+</span>
                <span className="text-white/80">Events</span>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <span className="block text-3xl font-bold">100+</span>
                <span className="text-white/80">Clubs</span>
              </div>
              <div className="h-8 w-px bg-white/20"></div>
              <div>
                <span className="block text-3xl font-bold">10k+</span>
                <span className="text-white/80">Students</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-full animate-pulse-slow"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 transform rotate-12">
              {/* Event Card Mockups */}
              <div className="bg-white rounded-xl shadow-lg p-4 transform -translate-y-8 hover:scale-105 transition-transform duration-300">
                <div className="h-32 rounded-lg bg-gray-200 mb-3"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 transform translate-y-8 hover:scale-105 transition-transform duration-300">
                <div className="h-32 rounded-lg bg-gray-200 mb-3"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 transform -translate-y-4 hover:scale-105 transition-transform duration-300">
                <div className="h-32 rounded-lg bg-gray-200 mb-3"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 transform translate-y-4 hover:scale-105 transition-transform duration-300">
                <div className="h-32 rounded-lg bg-gray-200 mb-3"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
