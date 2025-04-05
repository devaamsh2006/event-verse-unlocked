
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Award } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Form schema for validation
const studentSignupSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  studentId: z.string().min(1, { message: "Student ID is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Please confirm your password" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const organizerSignupSchema = z.object({
  clubName: z.string().min(2, { message: "Club name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  department: z.string().min(1, { message: "Department is required" }),
  contactPerson: z.string().min(2, { message: "Contact person name is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Please confirm your password" })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Signup = () => {
  const [userType, setUserType] = useState<'student' | 'organizer'>('student');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const studentForm = useForm<z.infer<typeof studentSignupSchema>>({
    resolver: zodResolver(studentSignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      studentId: "",
      password: "",
      confirmPassword: ""
    },
  });
  
  const organizerForm = useForm<z.infer<typeof organizerSignupSchema>>({
    resolver: zodResolver(organizerSignupSchema),
    defaultValues: {
      clubName: "",
      email: "",
      department: "",
      contactPerson: "",
      password: "",
      confirmPassword: ""
    },
  });

  const onStudentSubmit = (data: z.infer<typeof studentSignupSchema>) => {
    console.log("Student signup data:", data);
    
    // Simulate signup (in a real app, connect to Supabase or other auth provider)
    toast({
      title: "Account created successfully",
      description: "Welcome to EventVerse! Your student account has been created.",
    });
    
    // Redirect to dashboard after a delay
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };
  
  const onOrganizerSubmit = (data: z.infer<typeof organizerSignupSchema>) => {
    console.log("Organizer signup data:", data);
    
    // Simulate signup (in a real app, connect to Supabase or other auth provider)
    toast({
      title: "Club account created",
      description: "Your club account is pending approval. You'll be notified once approved.",
    });
    
    // Redirect to manage events page after a delay
    setTimeout(() => {
      navigate('/manage');
    }, 1500);
  };

  return (
    <div className="container max-w-screen-sm mx-auto py-12 px-4">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Sign up to start using EventVerse
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student" className="w-full" onValueChange={(value) => setUserType(value as 'student' | 'organizer')}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="student" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Student</span>
              </TabsTrigger>
              <TabsTrigger value="organizer" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Club Organizer</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="student">
              <Form {...studentForm}>
                <form onSubmit={studentForm.handleSubmit(onStudentSubmit)} className="space-y-4">
                  <FormField
                    control={studentForm.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={studentForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@university.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={studentForm.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Your student ID" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={studentForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Create a password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={studentForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Confirm your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    Create Student Account
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="organizer">
              <Form {...organizerForm}>
                <form onSubmit={organizerForm.handleSubmit(onOrganizerSubmit)} className="space-y-4">
                  <FormField
                    control={organizerForm.control}
                    name="clubName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Club Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name of your club or organization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={organizerForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Club Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="club.email@university.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={organizerForm.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department/Faculty</FormLabel>
                        <FormControl>
                          <Input placeholder="Associated department or faculty" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={organizerForm.control}
                    name="contactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Person</FormLabel>
                        <FormControl>
                          <Input placeholder="Primary contact person name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={organizerForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Create a password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={organizerForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Confirm your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    Create Club Account
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
