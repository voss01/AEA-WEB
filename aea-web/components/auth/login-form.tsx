'use client'

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { AuthCard } from "./auth-card"
import {zodResolver} from "@hookform/resolvers/zod"
import { LoginSchema } from "@/types/AUTH-package/login-schema"
import * as z from "zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { emailSignIn } from "@/server/actions/AUTH-package/email-signin"
import {useAction} from 'next-safe-action/hooks'
import { cn } from "@/lib/utils"
import { useState } from "react"
import { FormSuccess } from "./form-success"
import { FormError } from "./form-error"
import{
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
}from "@/components/ui/input-otp"

export const LoginForm = () =>{
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            password: "",
        },
    });

    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [showTwoFactor, setShowTwoFactor] = useState(false)

    const {execute, status} = useAction(emailSignIn, {
        onSuccess(data){
            if(data.data?.error) setError(data.data?.error)
            if (data.data?.success) setSuccess(data.data?.success);
            if (data.data?.twoFactor) setShowTwoFactor(true);
        }
       
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) =>{
        console.log(values)
        execute(values)
    }

    return (
      <AuthCard
        cardTitle="Welcome back!"
        backButtonHref="/auth/register"
        backButtonLabel="Create a new account"
        showSocials
      >
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                {showTwoFactor && (
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Two Factor</FormLabel>
                        <FormControl>
                          <InputOTP
                            disabled={status === "executing"}
                            {...field}
                            maxLength={6}
                          >
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormControl />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
                {!showTwoFactor && (
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="mb-4">
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
                        <FormItem >
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
                  </>
                )}
                <FormSuccess message={success} />
                <FormError message={error} />

                <Button size={"sm"} variant={"link"} asChild>
                  <Link href="/auth/reset">Forgot your password</Link>
                </Button>
              </div>
              <div className="mt-10">
              <Button
                type="submit"
                className={cn(
                  "w-full my-[-10px] bg-orange-500",
                  status === "executing" ? "animate-pulse" : ""
                )}
              >
                {showTwoFactor ? "Verify" : "Sign In"}
              </Button>
              </div>
            </form>
          </Form>
        </div>
      </AuthCard>
    );
}