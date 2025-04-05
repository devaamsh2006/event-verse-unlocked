
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  category: string;
  attendees: number;
  featured?: boolean;
}

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'tech': 'bg-blue-100 text-blue-800',
    'sports': 'bg-green-100 text-green-800',
    'art': 'bg-purple-100 text-purple-800',
    'music': 'bg-pink-100 text-pink-800',
    'workshop': 'bg-amber-100 text-amber-800',
    'career': 'bg-cyan-100 text-cyan-800',
    'social': 'bg-indigo-100 text-indigo-800',
    'volunteer': 'bg-rose-100 text-rose-800',
    'academic': 'bg-emerald-100 text-emerald-800',
  };
  
  return colors[category.toLowerCase()] || 'bg-gray-100 text-gray-800';
};

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  description,
  date,
  time,
  location,
  imageUrl,
  category,
  attendees,
  featured = false,
}) => {
  const categoryColor = getCategoryColor(category);
  
  return (
    <div className={`event-card ${featured ? 'border-2 border-theme-purple animate-pulse-slow' : 'border border-gray-200'} shadow hover:-translate-y-1 transition-all duration-300`}>
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={categoryColor}>
            {category}
          </Badge>
          {featured && (
            <Badge className="bg-theme-purple text-white">
              Featured
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold font-heading text-theme-navy mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2 text-theme-purple" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2 text-theme-purple" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-theme-purple" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="h-4 w-4 mr-2 text-theme-purple" />
            <span>{attendees} attending</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link to={`/events/${id}`}>View Details</Link>
          </Button>
          <Button variant="outline" className="flex-1">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
