
import React, { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedEvents from '@/components/FeaturedEvents';
import CategorySelector from '@/components/CategorySelector';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Ticket, Users, Award, Bookmark, HandHelping, School, Music, Paintbrush } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'tech', name: 'Technology', icon: <School className="w-6 h-6 text-blue-600" />, color: 'bg-blue-100' },
    { id: 'music', name: 'Music', icon: <Music className="w-6 h-6 text-pink-600" />, color: 'bg-pink-100' },
    { id: 'art', name: 'Arts', icon: <Paintbrush className="w-6 h-6 text-purple-600" />, color: 'bg-purple-100' },
    { id: 'sports', name: 'Sports', icon: <Users className="w-6 h-6 text-green-600" />, color: 'bg-green-100' },
    { id: 'workshop', name: 'Workshops', icon: <Award className="w-6 h-6 text-amber-600" />, color: 'bg-amber-100' },
    { id: 'volunteer', name: 'Volunteer', icon: <HandHelping className="w-6 h-6 text-rose-600" />, color: 'bg-rose-100' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-8">Browse Events by Category</h2>
            <CategorySelector 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(id) => setSelectedCategory(id === selectedCategory ? null : id)}
            />
          </div>
        </div>
        
        <FeaturedEvents />
        
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="section-title mb-4">Stay Connected & Informed</h2>
                <p className="text-gray-600 mb-6">
                  Never miss an event again. EventVerse sends you personalized recommendations, reminders, and updates about your favorite categories and organizations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-theme-purple" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold font-heading">Unified Calendar</h3>
                      <p className="text-gray-600">See all your events in one place, sync with your personal calendar.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Ticket className="h-5 w-5 text-theme-purple" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold font-heading">Digital Tickets</h3>
                      <p className="text-gray-600">Manage your event registrations with easy access QR codes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <Bookmark className="h-5 w-5 text-theme-purple" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold font-heading">Personalized Recommendations</h3>
                      <p className="text-gray-600">Discover events based on your interests and past attendance.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/signup">Create Free Account</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative hidden md:block">
                <div className="neumorphic p-6 rounded-2xl max-w-md mx-auto">
                  <div className="bg-theme-purple text-white p-4 rounded-t-lg">
                    <h3 className="font-semibold">April 2025</h3>
                  </div>
                  <div className="bg-white rounded-b-lg p-4">
                    <div className="grid grid-cols-7 gap-2 text-center text-sm">
                      <div className="text-gray-500">Su</div>
                      <div className="text-gray-500">Mo</div>
                      <div className="text-gray-500">Tu</div>
                      <div className="text-gray-500">We</div>
                      <div className="text-gray-500">Th</div>
                      <div className="text-gray-500">Fr</div>
                      <div className="text-gray-500">Sa</div>
                      
                      {/* Calendar days */}
                      {Array.from({ length: 30 }, (_, i) => {
                        const day = i + 1;
                        const hasEvent = [5, 12, 15, 22, 25].includes(day);
                        return (
                          <div 
                            key={day} 
                            className={`h-8 w-8 flex items-center justify-center rounded-full ${
                              hasEvent 
                                ? 'bg-theme-purple text-white' 
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            {day}
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center p-2 bg-purple-50 rounded-lg">
                        <div className="w-2 h-8 bg-theme-purple rounded-full mr-2"></div>
                        <div>
                          <p className="font-medium">Tech Hackathon</p>
                          <p className="text-xs text-gray-500">9:00 AM - 9:00 PM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-2 bg-pink-50 rounded-lg">
                        <div className="w-2 h-8 bg-theme-coral rounded-full mr-2"></div>
                        <div>
                          <p className="font-medium">Spring Concert</p>
                          <p className="text-xs text-gray-500">7:00 PM - 10:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full -z-10"></div>
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-12 bg-theme-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to Experience Campus Life?</h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
              Join EventVerse today and never miss out on the exciting opportunities campus has to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-theme-purple hover:bg-gray-100">
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/events">Explore Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
