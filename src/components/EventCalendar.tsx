
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar as CalendarIcon } from "lucide-react";
import EventCard from "@/components/EventCard";

// Sample event data - this would typically come from an API
const sampleEvents = [
  {
    id: "1",
    title: "Tech Hackathon",
    description: "Join us for a 24-hour coding challenge to build innovative solutions.",
    date: "2024-04-15",
    time: "9:00 AM - 9:00 AM (next day)",
    location: "Engineering Building",
    imageUrl: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "tech",
    attendees: 120,
    featured: true,
  },
  {
    id: "2",
    title: "Music Festival",
    description: "Annual campus music festival featuring bands from all genres.",
    date: "2024-04-10",
    time: "6:00 PM - 11:00 PM",
    location: "Campus Square",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "music",
    attendees: 450,
    featured: false,
  },
  {
    id: "3",
    title: "Research Symposium",
    description: "Undergraduate research presentations across all departments.",
    date: "2024-04-12",
    time: "10:00 AM - 4:00 PM",
    location: "Science Center",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "academic",
    attendees: 85,
    featured: false,
  },
  {
    id: "4",
    title: "Career Fair",
    description: "Connect with top employers from various industries.",
    date: "2024-04-20",
    time: "11:00 AM - 3:00 PM",
    location: "Student Union",
    imageUrl: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "career",
    attendees: 320,
    featured: true,
  },
  {
    id: "5",
    title: "Art Exhibition",
    description: "Showcasing student artwork from various mediums and styles.",
    date: "2024-04-18",
    time: "12:00 PM - 6:00 PM",
    location: "Visual Arts Center",
    imageUrl: "https://images.unsplash.com/photo-1531913764164-f85c52beb15a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "art",
    attendees: 75,
    featured: false,
  },
  {
    id: "6",
    title: "Basketball Tournament",
    description: "Inter-departmental basketball tournament with prizes.",
    date: "2024-04-22",
    time: "2:00 PM - 8:00 PM",
    location: "Sports Complex",
    imageUrl: "https://images.unsplash.com/photo-1546519638-68e109acd27d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "sports",
    attendees: 190,
    featured: false,
  },
  {
    id: "7",
    title: "Volunteer Training",
    description: "Orientation and training for campus community service initiatives.",
    date: "2024-04-05",
    time: "1:00 PM - 4:00 PM",
    location: "Community Center",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "volunteer",
    attendees: 45,
    featured: false,
  },
  {
    id: "8",
    title: "Leadership Workshop",
    description: "Interactive workshop on developing effective leadership skills.",
    date: "2024-04-25",
    time: "10:00 AM - 1:00 PM",
    location: "Business Building",
    imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "workshop",
    attendees: 60,
    featured: false,
  }
];

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState<any[]>([]);
  
  // Handle date selection
  const handleSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      // Find events for the selected date
      const formattedDate = format(date, 'yyyy-MM-dd');
      const filteredEvents = sampleEvents.filter(event => event.date === formattedDate);
      setEventsForSelectedDate(filteredEvents);
    } else {
      setEventsForSelectedDate([]);
    }
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-theme-purple" />
                <span>Event Calendar</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar 
                mode="single"
                selected={selectedDate}
                onSelect={handleSelect}
                className="rounded-md border shadow p-3 pointer-events-auto"
              />
              
              <div className="mt-4">
                {selectedDate && (
                  <p className="text-center text-muted-foreground">
                    {eventsForSelectedDate.length > 0 
                      ? `${eventsForSelectedDate.length} events on ${format(selectedDate, 'MMMM d, yyyy')}` 
                      : `No events on ${format(selectedDate, 'MMMM d, yyyy')}`}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          {selectedDate && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Events on {format(selectedDate, 'MMMM d, yyyy')}
              </h2>
              
              {eventsForSelectedDate.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eventsForSelectedDate.map((event) => (
                    <EventCard
                      key={event.id}
                      id={event.id}
                      title={event.title}
                      description={event.description}
                      date={event.date}
                      time={event.time}
                      location={event.location}
                      imageUrl={event.imageUrl}
                      category={event.category}
                      attendees={event.attendees}
                      featured={event.featured}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-lg text-gray-500">No events scheduled for this date.</p>
                  <p className="text-sm text-gray-400 mt-2">Try selecting a different date.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
