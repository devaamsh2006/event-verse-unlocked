import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Check, X, Mail, Phone, Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Navbar from '@/components/Navbar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface VolunteerApplication {
  id: string;
  studentName: string;
  studentId: string;
  studentImage: string;
  email: string;
  phone: string;
  eventId: string;
  eventName: string;
  eventDate: string;
  position: string;
  experience: string;
  status: 'pending' | 'approved' | 'rejected';
}

interface StudentSearchResult {
  id: string;
  name: string;
  image: string;
  major: string;
  year: string;
  skills: string[];
  volunteerHours: number;
}

const ClubRequests = () => {
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [selectedApplication, setSelectedApplication] = useState<VolunteerApplication | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  // Mock data for volunteer applications
  const [applications, setApplications] = useState<VolunteerApplication[]>([
    {
      id: '1',
      studentName: 'Alex Johnson',
      studentId: 'SID10045678',
      studentImage: '/placeholder.svg',
      email: 'alex.johnson@university.edu',
      phone: '(555) 123-4567',
      eventId: 'e1',
      eventName: 'Tech Hackathon',
      eventDate: 'June 15, 2025',
      position: 'Event Setup Coordinator',
      experience: 'I have helped organize two hackathons in the past. I am familiar with setting up the venue and coordinating with vendors.',
      status: 'pending',
    },
    {
      id: '2',
      studentName: 'Taylor Smith',
      studentId: 'SID10087654',
      studentImage: '/placeholder.svg',
      email: 'taylor.smith@university.edu',
      phone: '(555) 987-6543',
      eventId: 'e1',
      eventName: 'Tech Hackathon',
      eventDate: 'June 15, 2025',
      position: 'Registration Desk Volunteer',
      experience: 'I worked at the registration desk for the career fair last year. I am detail-oriented and good with people.',
      status: 'pending',
    },
    {
      id: '3',
      studentName: 'Jordan Lee',
      studentId: 'SID10023456',
      studentImage: '/placeholder.svg',
      email: 'jordan.lee@university.edu',
      phone: '(555) 456-7890',
      eventId: 'e2',
      eventName: 'Spring Concert',
      eventDate: 'May 20, 2025',
      position: 'Stage Manager Assistant',
      experience: 'I have been involved in theater and music productions for 3 years. I understand stage management requirements.',
      status: 'approved',
    },
    {
      id: '4',
      studentName: 'Casey Williams',
      studentId: 'SID10034567',
      studentImage: '/placeholder.svg',
      email: 'casey.williams@university.edu',
      phone: '(555) 234-5678',
      eventId: 'e2',
      eventName: 'Spring Concert',
      eventDate: 'May 20, 2025',
      position: 'Sound Engineer Assistant',
      experience: "I'm studying audio engineering and have experience with sound systems at campus events.",
      status: 'rejected',
    },
  ]);

  // Mock data for student search results
  const [studentSearchResults, setStudentSearchResults] = useState<StudentSearchResult[]>([
    {
      id: "s1",
      name: "Alex Johnson",
      image: "/placeholder.svg",
      major: "Computer Science",
      year: "Junior",
      skills: ["Programming", "UI/UX Design", "Project Management"],
      volunteerHours: 45
    },
    {
      id: "s2",
      name: "Taylor Smith",
      image: "/placeholder.svg",
      major: "Business Administration",
      year: "Senior",
      skills: ["Leadership", "Marketing", "Event Planning"],
      volunteerHours: 60
    },
    {
      id: "s3",
      name: "Jordan Lee",
      image: "/placeholder.svg",
      major: "Electrical Engineering",
      year: "Sophomore",
      skills: ["Circuit Design", "Soldering", "3D Printing"],
      volunteerHours: 25
    },
    {
      id: "s4",
      name: "Casey Williams",
      image: "/placeholder.svg",
      major: "Music Performance",
      year: "Senior",
      skills: ["Audio Engineering", "Stage Management", "Composition"],
      volunteerHours: 55
    }
  ]);

  const filteredStudents = studentSearchResults.filter(student => 
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleApproveApplication = (applicationId: string) => {
    setApplications(prevApplications => 
      prevApplications.map(app => 
        app.id === applicationId ? { ...app, status: 'approved' } : app
      )
    );
    
    toast({
      title: "Application Approved",
      description: "The volunteer has been notified about their application approval.",
    });
  };

  const handleRejectApplication = () => {
    if (!selectedApplication) return;
    
    setApplications(prevApplications => 
      prevApplications.map(app => 
        app.id === selectedApplication.id ? { ...app, status: 'rejected' } : app
      )
    );
    
    toast({
      title: "Application Rejected",
      description: "The volunteer has been notified about their application status.",
    });
    
    setMessage("");
    setSelectedApplication(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleInviteStudent = (studentId: string) => {
    toast({
      title: "Invitation Sent",
      description: `Your volunteer invitation has been sent to the student.`,
    });
  };

  const pendingApplications = applications.filter(app => app.status === 'pending');
  const approvedApplications = applications.filter(app => app.status === 'approved');
  const rejectedApplications = applications.filter(app => app.status === 'rejected');

  const ApplicationCard = ({ application }: { application: VolunteerApplication }) => (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={application.studentImage} alt={application.studentName} />
            <AvatarFallback>{application.studentName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">{application.studentName}</CardTitle>
            <CardDescription className="flex items-center text-sm mt-1">
              {application.studentId}
            </CardDescription>
          </div>
        </div>
        {application.status === 'pending' && (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
        )}
        {application.status === 'approved' && (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">Approved</Badge>
        )}
        {application.status === 'rejected' && (
          <Badge variant="outline" className="bg-red-100 text-red-800 hover:bg-red-100">Rejected</Badge>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm font-medium">Event</span>
            <span className="text-sm">{application.eventName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Date</span>
            <span className="text-sm flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {application.eventDate}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">Position</span>
            <span className="text-sm">{application.position}</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Experience</span>
            <p className="text-sm">{application.experience}</p>
          </div>
          <div className="pt-2 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="flex items-center">
              <Mail className="h-3 w-3 mr-1" /> {application.email}
            </Button>
            <Button variant="outline" size="sm" className="flex items-center">
              <Phone className="h-3 w-3 mr-1" /> {application.phone}
            </Button>
          </div>
        </div>
      </CardContent>
      {application.status === 'pending' && (
        <CardFooter className="flex justify-end space-x-2 pt-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                onClick={() => setSelectedApplication(application)}
              >
                <X className="mr-1 h-4 w-4" /> Reject
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reject Volunteer Application</DialogTitle>
                <DialogDescription>
                  Provide feedback to the volunteer about why their application was rejected.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Provide a reason for rejection or suggestions for future applications..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => {
                  setMessage("");
                  setSelectedApplication(null);
                }}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleRejectApplication}>
                  Reject Application
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button 
            size="sm" 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={() => handleApproveApplication(application.id)}
          >
            <Check className="mr-1 h-4 w-4" /> Approve
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
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Volunteer Applications</h1>
            <p className="text-muted-foreground">Manage volunteer applications for your events</p>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for students to invite..."
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
            {filteredStudents.length > 0 ? (
              <div className="space-y-4">
                {filteredStudents.map(student => (
                  <Card key={student.id}>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={student.image} alt={student.name} />
                          <AvatarFallback>{student.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{student.name}</CardTitle>
                          <CardDescription className="text-sm mt-1">
                            {student.major}, {student.year}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium">Skills: </span>
                          <span className="text-sm">{student.skills.join(", ")}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium">Volunteer Hours: </span>
                          <span className="text-sm">{student.volunteerHours} hours</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button onClick={() => handleInviteStudent(student.id)}>
                        Invite to Volunteer
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No students found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        )}
        
        <Tabs defaultValue="pending" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="pending" className="relative">
              Pending
              {pendingApplications.length > 0 && (
                <Badge className="ml-2 bg-yellow-500">{pendingApplications.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="approved">
              Approved
              {approvedApplications.length > 0 && (
                <Badge className="ml-2 bg-green-500">{approvedApplications.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="rejected">
              Rejected
              {rejectedApplications.length > 0 && (
                <Badge className="ml-2 bg-red-500">{rejectedApplications.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending">
            {pendingApplications.length > 0 ? (
              pendingApplications.map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No pending volunteer applications</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="approved">
            {approvedApplications.length > 0 ? (
              approvedApplications.map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No approved volunteer applications</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="rejected">
            {rejectedApplications.length > 0 ? (
              rejectedApplications.map(application => (
                <ApplicationCard key={application.id} application={application} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No rejected volunteer applications</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClubRequests;
