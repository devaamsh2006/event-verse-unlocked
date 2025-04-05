
import React from 'react';
import EventCard from './EventCard';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedEvents = () => {
  // Mock data for featured events
  const featuredEvents = [
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
      featured: true
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
      featured: true
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
      featured: true
    }
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">Featured Events</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
