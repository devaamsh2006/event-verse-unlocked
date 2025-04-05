
import React from 'react';
import EventCard from '@/components/EventCard';

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

const EventsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sampleEvents.map((event) => (
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
  );
};

export default EventsList;
