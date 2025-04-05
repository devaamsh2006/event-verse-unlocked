
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Bookmark, Award, User } from 'lucide-react';

const StudentDashboard = () => {
  // This would come from context or a custom hook in a real app
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');
  
  if (!isLoggedIn || userRole !== 'student') {
    // Redirect to login or show an error
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>
                You need to be logged in as a student to view this page.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Please log in with your student account to access your dashboard.</p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-heading font-bold text-theme-navy mb-8">
            Student Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-theme-purple" />
                  <span>Upcoming Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Events you've registered for</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bookmark className="h-5 w-5 text-theme-purple" />
                  <span>Saved Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Events you're interested in</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-theme-purple" />
                  <span>Attended</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">23</p>
                <p className="text-sm text-muted-foreground">Total events attended</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <User className="h-5 w-5 text-theme-purple" />
                  <span>Volunteer Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">18</p>
                <p className="text-sm text-muted-foreground">Total volunteer hours</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Upcoming Events</CardTitle>
                <CardDescription>Events you've registered for</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for upcoming events */}
                <p className="text-center py-12 text-muted-foreground">
                  You have no upcoming events. Explore events to join!
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Applications</CardTitle>
                <CardDescription>Status of your volunteer requests</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for volunteer applications */}
                <p className="text-center py-12 text-muted-foreground">
                  You haven't applied to volunteer for any events yet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StudentDashboard;
