
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Award, Bell } from 'lucide-react';

const ClubDashboard = () => {
  // This would come from context or a custom hook in a real app
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole');
  
  if (!isLoggedIn || userRole !== 'organizer') {
    // Redirect to login or show an error
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Access Denied</CardTitle>
              <CardDescription>
                You need to be logged in as a club organizer to view this page.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Please log in with your organizer account to access your dashboard.</p>
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
            Club Organizer Dashboard
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-theme-purple" />
                  <span>Active Events</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Events you're currently running</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-theme-purple" />
                  <span>Total Attendees</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">243</p>
                <p className="text-sm text-muted-foreground">Students attending your events</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-theme-purple" />
                  <span>Completed</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Total events completed</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5 text-theme-purple" />
                  <span>Pending Requests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Volunteer applications</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Your Events</CardTitle>
                <CardDescription>Manage your club's events</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for club events */}
                <p className="text-center py-12 text-muted-foreground">
                  You have no active events. Create a new event to get started!
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Applications</CardTitle>
                <CardDescription>Manage student volunteer requests</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Placeholder for volunteer applications */}
                <p className="text-center py-12 text-muted-foreground">
                  No pending volunteer applications.
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

export default ClubDashboard;
