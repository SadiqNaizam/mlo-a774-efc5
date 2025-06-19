import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils"; // Assuming utils.ts exists for cn function

interface AuthFormContainerProps {
  title: string;
  description?: string; // Optional description below the title
  children: React.ReactNode;
  className?: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  title,
  description,
  children,
  className,
}) => {
  console.log(`AuthFormContainer loaded with title: ${title}`);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <Card className={cn("w-full max-w-md shadow-xl dark:bg-gray-800", className)}>
        <CardHeader className="text-center p-6">
          <CardTitle className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="p-6 pt-0">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthFormContainer;