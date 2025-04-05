
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Calendar, Filter, Layout, List, Search, SlidersHorizontal, MapPin } from 'lucide-react';

const Events = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Mock data for events
  const events = [
    {
      id: '1',
      title: 'Annual Tech Hackathon',
      description: 'Join the biggest hackathon of the year and showcase your coding skills. Great prizes to be won!',
      date: 'June 15, 2025',
      time: '9:00 AM - 9:00 PM',
      location: 'Main Campus, Building B',
      imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop',
      category: 'Tech',
      attendees: 120,
    },
    {
      id: '2',
      title: 'Spring Concert Series',
      description: 'Enjoy live music performances featuring student bands and special guest artists.',
      date: 'May 20, 2025',
      time: '7:00 PM - 10:00 PM',
      location: 'Campus Amphitheater',
      imageUrl: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2000&auto=format&fit=crop',
      category: 'Music',
      attendees: 250,
    },
    {
      id: '3',
      title: 'Career Fair 2025',
      description: 'Connect with top employers and explore internship and job opportunities.',
      date: 'April 10, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Student Union Hall',
      imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=2000&auto=format&fit=crop',
      category: 'Career',
      attendees: 500,
    },
    {
      id: '4',
      title: 'Leadership Workshop',
      description: 'Develop essential leadership skills with industry professionals and faculty mentors.',
      date: 'April 25, 2025',
      time: '1:00 PM - 4:00 PM',
      location: 'Business School, Room 203',
      imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop',
      category: 'Workshop',
      attendees: 75,
    },
    {
      id: '5',
      title: 'Photography Exhibition',
      description: 'View stunning photographs from talented student photographers across campus.',
      date: 'May 5, 2025',
      time: '11:00 AM - 6:00 PM',
      location: 'Arts Building Gallery',
      imageUrl: 'https://images.unsplash.com/photo-1552334823-ca5aa534c2ad?q=80&w=2000&auto=format&fit=crop',
      category: 'Art',
      attendees: 150,
    },
    {
      id: '6',
      title: 'Intramural Basketball Tournament',
      description: 'Compete with friends in our annual intramural basketball competition.',
      date: 'June 5, 2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Campus Recreation Center',
      imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109acd27d?q=80&w=2000&auto=format&fit=crop',
      category: 'Sports',
      attendees: 200,
    },
  ];
  
  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-theme-purple text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Discover Events</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore and find events that match your interests across campus.
            </p>
          </div>
        </div>
        
        <div className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="relative flex-grow max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                
                <div className="border-l h-6 mx-2 border-gray-300"></div>
                
                <div className="flex items-center rounded-md border border-input bg-background p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setViewMode('grid')}
                  >
                    <Layout className="h-4 w-4" />
                    <span className="sr-only">Grid view</span>
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                    <span className="sr-only">List view</span>
                  </Button>
                </div>
              </div>
            </div>
            
            {filterOpen && (
              <div className="mb-8 p-4 border rounded-lg bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Event Categories</h3>
                    <div className="space-y-2">
                      {['Tech', 'Music', 'Art', 'Sports', 'Workshop', 'Career', 'Social', 'Academic'].map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox id={`category-${category}`} />
                          <Label htmlFor={`category-${category}`} className="ml-2">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Date Range</h3>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor="start-date">Start Date</Label>
                        <Input type="date" id="start-date" />
                      </div>
                      <div>
                        <Label htmlFor="end-date">End Date</Label>
                        <Input type="date" id="end-date" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Other Filters</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Checkbox id="free-events" />
                        <Label htmlFor="free-events" className="ml-2">
                          Free Events
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="virtual-events" />
                        <Label htmlFor="virtual-events" className="ml-2">
                          Virtual Events
                        </Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox id="accessible" />
                        <Label htmlFor="accessible" className="ml-2">
                          Accessible
                        </Label>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button className="w-full">Apply Filters</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                  <EventCard key={event.id} {...event} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-gray-500">No events found matching your search.</p>
                  <Button variant="link" onClick={() => setSearchQuery('')}>
                    Clear search
                  </Button>
                </div>
              )}
            </div>
            
            {filteredEvents.length > 0 && (
              <div className="mt-8 text-center">
                <Button variant="outline">Load More Events</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
