/**
 * The `RegisterForm` component is responsible for rendering the registration form for the application. It uses the `react-hook-form` library to manage the form state and validation, and the `emailRegister` action to handle the registration process.

 * The form includes fields for the user's name, email, and password, and provides feedback on the success or failure of the registration process. The component also includes a link to the password reset page.

 * The `RegisterForm` component is wrapped in an `AuthCard` component, which provides a consistent layout and styling for the authentication-related components in the application.
 */
"use client";


import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { AuthCard } from "./auth-card";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/types/AUTH-package/register-schema";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

import { useAction } from "next-safe-action/hooks";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { emailRegister } from "@/server/actions/AUTH-package/email-register";
import { FormSuccess } from "./form-success";
import { FormError } from "./form-error";

export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
        email:"",
        password:"",
        name:"",

      
    },
  });

  const [error, setError] = useState("");
  const[success, setSuccess] = useState('');
const {execute, status }= useAction(emailRegister, {


    onSuccess(data){
       if(data.data?.error) setError(data.data?.error);
        if (data.data?.success) setSuccess(data.data?.success);
    }
})
 
    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
      console.log(values);
      execute(values);
    };



  return (
    <AuthCard
      cardTitle="Create a new account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account? Login here"
      showSocials
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="name" type="text" />
                    </FormControl>
                    <FormControl />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="email"
                        type="email"
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormControl />
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
                      <Input
                        {...field}
                        placeholder="*******"
                        type="password"
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormControl />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormSuccess message={success} />
              <FormError message={error} />


              <Button size={"sm"} variant={"link"} asChild>
                <Link href="/auth/reset">Forgot your password</Link>
              </Button>
            </div>
            <Button
              type="submit"
              className={cn(
                "w-full my-2",
                status === "executing" ? "animate-pulse" : ""
              )}
            >
              create new account
            </Button>
          </form>
        </Form>
      </div>
    </AuthCard>
  );
};
