import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCalendar from '@/components/EventCalendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-theme-navy mb-4 md:mb-0">
              Discover Events
            </h1>
            
            <Tabs defaultValue="list" className="w-full max-w-xs" onValueChange={(value) => setView(value as 'list' | 'calendar')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {view === 'calendar' ? (
            <EventCalendar />
          ) : (
            <div>
              {/* Existing event list view content remains here */}
              <p className="text-center py-12">List view content is here</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
