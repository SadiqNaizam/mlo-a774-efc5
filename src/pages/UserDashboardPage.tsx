import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Shadcn/ui Components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

// Icons
import { LogOut, User } from 'lucide-react';

const UserDashboardPage: React.FC = () => {
  console.log('UserDashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear auth tokens/state here
    console.log('User logging out...');
    navigate('/'); // Navigate to LoginPage (route defined in App.tsx)
  };

  // Placeholder user data
  const user = {
    email: 'user@example.com',
    avatarUrl: 'https://avatar.vercel.sh/user-placeholder.png', // Generic placeholder avatar
    fallbackInitials: 'U',
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-md shadow-xl dark:bg-gray-800">
          <CardHeader className="items-center text-center p-6">
            <Avatar className="mx-auto mb-4 h-24 w-24 border-2 border-primary">
              <AvatarImage src={user.avatarUrl} alt={user.email} />
              <AvatarFallback className="text-3xl bg-gray-200 dark:bg-gray-700">
                <User className="h-12 w-12 text-gray-500 dark:text-gray-400" />
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-3xl font-bold">Welcome Back!</CardTitle>
            <CardDescription className="text-md text-gray-600 dark:text-gray-400 mt-1">
              You are successfully logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center p-6 pt-2">
            <p className="text-lg">
              Logged in as: <span className="font-semibold text-primary">{user.email}</span>
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              This is your dashboard. More features will be available soon.
            </p>
          </CardContent>
          <CardFooter className="p-6">
            <Button 
              variant="destructive" 
              className="w-full text-lg py-6" 
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" /> Logout
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboardPage;