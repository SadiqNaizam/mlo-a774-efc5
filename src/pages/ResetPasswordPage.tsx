import React from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import AuthFormContainer from '@/components/AuthFormContainer';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner'; // For notifications

// Define the schema for form validation using Zod
const resetPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Set the error on the confirmPassword field
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

const ResetPasswordPage: React.FC = () => {
  console.log('ResetPasswordPage loaded');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token'); // Example: Get token from URL query params

  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    console.log('Reset password form submitted with:', data);
    console.log('Reset token (if present):', token); // Log the token if it exists

    // Simulate API call for password reset
    try {
      // Replace with actual API call:
      // await api.auth.resetPassword({ password: data.password, token });
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

      toast.success("Password Reset Successful!", {
        description: "Your password has been updated. You can now log in with your new password.",
        duration: 5000,
      });
      navigate('/login'); // Navigate to login page, path from App.tsx
    } catch (error) {
      console.error("Password reset failed:", error);
      toast.error("Password Reset Failed", {
        description: (error as Error)?.message || "An unexpected error occurred. Please try again.",
      });
      // Optionally, handle specific error messages from API
      // form.setError("root", { type: "manual", message: "Password reset failed. Please try again." });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      <main className="flex-grow">
        <AuthFormContainer
          title="Reset Your Password"
          description="Enter and confirm your new password below. Ensure it's at least 8 characters long."
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">New Password</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="confirmPassword">Confirm New Password</FormLabel>
                    <FormControl>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="new-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {token ? null : (
                <p className="text-sm text-yellow-600 dark:text-yellow-400">
                  Note: Typically, a reset token from your email link would be used here. For this demo, we're proceeding without one.
                </p>
              )}
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Resetting Password...' : 'Reset Password'}
              </Button>
            </form>
          </Form>
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-primary hover:underline">
              Log in here
            </Link>
          </p>
        </AuthFormContainer>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;