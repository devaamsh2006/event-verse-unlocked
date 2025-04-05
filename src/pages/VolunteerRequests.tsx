import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Check, X, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';

interface VolunteerRequest {
  id: string;
  eventName: string;
  eventDate: string;
  clubName: string;
  clubLogo: string;
  position: string;
  status: 'pending' | 'accepted' | 'declined';
  hoursNeeded: number;
}

interface ClubSearchResult {
  id: string;
  name: string;
  logo: string;
  description: string;
  events: number;
  members: number;
}

const VolunteerRequests = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Mock data for volunteer requests
  const [volunteerRequests, setVolunteerRequests] = useState<VolunteerRequest[]>([
    {
      id: '1',
      eventName: 'Tech Hackathon',
      eventDate: 'June 15, 2025',
      clubName: 'Computer Science Club',
      clubLogo: '/placeholder.svg',
      position: 'Event Setup Coordinator',
      status: 'pending',
      hoursNeeded: 4,
    },
    {
      id: '2',
      eventName: 'Spring Concert',
      eventDate: 'May 20, 2025',
      clubName: 'Music Appreciation Society',
      clubLogo: '/placeholder.svg',
      position: 'Stage Manager Assistant',
      status: 'pending',
      hoursNeeded: 6,
    },
    {
      id: '3',
      eventName: 'Career Fair',
      eventDate: 'April 10, 2025',
      clubName: 'Business Students Association',
      clubLogo: '/placeholder.svg',
      position: 'Registration Desk Volunteer',
      status: 'accepted',
      hoursNeeded: 3,
    },
    {
      id: '4',
      eventName: 'Arts Exhibition',
      eventDate: 'July 8, 2025',
      clubName: 'Fine Arts Society',
      clubLogo: '/placeholder.svg',
      position: 'Gallery Guide',
      status: 'declined',
      hoursNeeded: 5,
    },
  ]);

  // Mock data for club search results
  const [clubSearchResults, setClubSearchResults] = useState<ClubSearchResult[]>([
    {
      id: "c1",
      name: "Computer Science Club",
      logo: "/placeholder.svg",
      description: "Promoting technology and computer science on campus",
      events: 12,
      members: 75
    },
    {
      id: "c2",
      name: "Music Appreciation Society",
      logo: "/placeholder.svg",
      description: "Celebrating music of all genres through concerts and workshops",
      events: 8,
      members: 45
    },
    {
      id: "c3",
      name: "Business Students Association",
      logo: "/placeholder.svg",
      description: "Connecting business students with industry professionals",
      events: 15,
      members: 120
    },
    {
      id: "c4",
      name: "Fine Arts Society",
      logo: "/placeholder.svg",
      description: "Supporting visual arts through exhibitions and classes",
      events: 6,
      members: 30
    }
  ]);

  const filteredClubs = clubSearchResults.filter(club => 
    club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    club.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAcceptRequest = (requestId: string) => {
    setVolunteerRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === requestId ? { ...request, status: 'accepted' } : request
      )
    );
    
    toast({
      title: "Request Accepted",
      description: "You have accepted the volunteer request. The organizer will be notified.",
    });
  };

  const handleDeclineRequest = (requestId: string) => {
    setVolunteerRequests(prevRequests => 
      prevRequests.map(request => 
        request.id === requestId ? { ...request, status: 'declined' } : request
      )
    );
    
    toast({
      title: "Request Declined",
      description: "You have declined the volunteer request.",
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleApplyToClub = (clubId: string) => {
    toast({
      title: "Application Sent",
      description: `Your volunteer application has been sent to the club.`,
    });
  };

  const pendingRequests = volunteerRequests.filter(req => req.status === 'pending');
  const acceptedRequests = volunteerRequests.filter(req => req.status === 'accepted');
  const declinedRequests = volunteerRequests.filter(req => req.status === 'declined');

  const RequestCard = ({ request }: { request: VolunteerRequest }) => (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={request.clubLogo} alt={request.clubName} />
            <AvatarFallback>{request.clubName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{request.eventName}</CardTitle>
            <CardDescription className="flex items-center text-sm mt-1">
              <Calendar className="h-3 w-3 mr-1" />
              {request.eventDate}
            </CardDescription>
          </div>
        </div>
        {request.status === 'pending' && (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
        )}
        {request.status === 'accepted' && (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Accepted</Badge>
        )}
        {request.status === 'declined' && (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">Declined</Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Organized by</span>
            <span className="text-sm">{request.clubName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Position</span>
            <span className="text-sm">{request.position}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Hours Needed</span>
            <span className="text-sm">{request.hoursNeeded} hours</span>
          </div>
        </div>
      </CardContent>
      {request.status === 'pending' && (
        <CardFooter className="flex justify-end space-x-2 pt-0">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
            onClick={() => handleDeclineRequest(request.id)}
          >
            <X className="mr-1 h-4 w-4" /> Decline
          </Button>
          <Button 
            size="sm" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => handleAcceptRequest(request.id)}
          >
            <Check className="mr-1 h-4 w-4" /> Accept
          </Button>
        </CardFooter>
      )}
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container max-w-screen-md mx-auto py-12 px-4 flex-grow">
        <div className="flex items-center space-x-4 mb-8">
          <div className="bg-primary/10 p-3 rounded-full">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Volunteer Requests</h1>
            <p className="text-muted-foreground">Manage your volunteer opportunities</p>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for clubs to volunteer with..."
              className="pl-10 pr-4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="absolute right-0 top-0 h-full rounded-l-none"
            >
              Search
            </Button>
          </div>
        </form>
        
        {showSearchResults && searchQuery && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Search Results</h2>
            {filteredClubs.length > 0 ? (
              <div className="space-y-4">
                {filteredClubs.map(club => (
                  <Card key={club.id}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={club.logo} alt={club.name} />
                          <AvatarFallback>{club.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{club.name}</CardTitle>
                          <CardDescription className="text-sm mt-1">
                            {club.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between">
                        <span>Events: {club.events}</span>
                        <span>Members: {club.members}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={() => handleApplyToClub(club.id)}>
                        Apply to Volunteer
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No clubs found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}
        
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="pending" className="relative">
              Pending
              {pendingRequests.length > 0 && (
                <Badge className="ml-2 bg-yellow-500">{pendingRequests.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="accepted">
              Accepted
              {acceptedRequests.length > 0 && (
                <Badge className="ml-2 bg-green-500">{acceptedRequests.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="declined">
              Declined
              {declinedRequests.length > 0 && (
                <Badge className="ml-2 bg-red-500">{declinedRequests.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            {pendingRequests.length > 0 ? (
              pendingRequests.map(request => (
                <RequestCard key={request.id} request={request} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No pending volunteer requests</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="accepted">
            {acceptedRequests.length > 0 ? (
              acceptedRequests.map(request => (
                <RequestCard key={request.id} request={request} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No accepted volunteer requests</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="declined">
            {declinedRequests.length > 0 ? (
              declinedRequests.map(request => (
                <RequestCard key={request.id} request={request} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No declined volunteer requests</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VolunteerRequests;
