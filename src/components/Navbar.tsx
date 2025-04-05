
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Calendar, 
  Menu, 
  Search, 
  User, 
  Home, 
  Award,
  Bookmark,
  LogIn
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'organizer' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-theme-purple flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-heading font-semibold">EventVerse</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-item">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/events" className="nav-item">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Events</span>
              </div>
            </Link>
            {isLoggedIn && userRole === 'student' && (
              <>
                <Link to="/dashboard" className="nav-item">
                  <div className="flex items-center gap-2">
                    <Bookmark className="h-4 w-4" />
                    <span>My Events</span>
                  </div>
                </Link>
                <Link to="/volunteer-requests" className="nav-item">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Volunteer Requests</span>
                  </div>
                </Link>
              </>
            )}
            {isLoggedIn && userRole === 'organizer' && (
              <>
                <Link to="/manage" className="nav-item">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Manage Events</span>
                  </div>
                </Link>
                <Link to="/club-requests" className="nav-item">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Applications</span>
                  </div>
                </Link>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative rounded-md shadow-sm hidden md:flex">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="py-2 pl-10 pr-4 block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-purple sm:text-sm"
                placeholder="Search events..."
              />
            </div>
            
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1">
                        <Badge className="h-5 w-5 flex items-center justify-center p-0 bg-theme-coral">3</Badge>
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* Notification items would go here */}
                    <DropdownMenuItem>
                      <div className="flex flex-col">
                        <p className="font-medium">New event: Tech Hackathon</p>
                        <p className="text-sm text-gray-500">Registration is now open</p>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="User" />
                        <AvatarFallback>US</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  asChild
                >
                  <Link to="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Log in
                  </Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">
                    Sign up
                  </Link>
                </Button>
              </div>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Home</Link>
            <Link to="/events" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Events</Link>
            
            {isLoggedIn && userRole === 'student' && (
              <>
                <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">My Events</Link>
                <Link to="/volunteer-requests" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Volunteer Requests</Link>
              </>
            )}
            
            {isLoggedIn && userRole === 'organizer' && (
              <>
                <Link to="/manage" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Manage Events</Link>
                <Link to="/club-requests" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Applications</Link>
              </>
            )}
            
            {!isLoggedIn && (
              <>
                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Log in</Link>
                <Link to="/signup" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Sign up</Link>
              </>
            )}
            
            <div className="relative mt-3 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="py-2 pl-10 pr-4 block w-full rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-theme-purple sm:text-sm"
                placeholder="Search events..."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
