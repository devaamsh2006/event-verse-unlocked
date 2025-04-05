
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
import { LogIn, User, Award } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

// Form schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Login = () => {
  const [userType, setUserType] = useState<'student' | 'organizer'>('student');
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data, userType);
    
    // Simulate login (in a real app, connect to Supabase or other auth provider)
    toast({
      title: "Login successful",
      description: `Welcome back, ${userType === 'student' ? 'Student' : 'Club Organizer'}!`,
    });
    
    // Redirect to appropriate dashboard
    setTimeout(() => {
      if (userType === 'student') {
        navigate('/dashboard');
      } else {
        navigate('/manage');
      }
    }, 1500);
  };

  return (
    <div className="container max-w-screen-sm mx-auto py-12 px-4">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome back!</CardTitle>
          <CardDescription className="text-center">
            Login to access your EventVerse account
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
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
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In as Student
                  </Button>
                </form>
              </Form>
            </TabsContent>
            
            <TabsContent value="organizer">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
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
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In as Club Organizer
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">
              Create an account
            </Link>
          </div>
          <div className="text-xs text-muted-foreground text-center">
            By signing in, you agree to our{" "}
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

export default Login;
