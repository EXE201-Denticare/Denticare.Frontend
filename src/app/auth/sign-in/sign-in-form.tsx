"use client"

import React, { useState, useTransition } from "react"

import { useSearchParams } from "next/navigation"

import { signIn } from "@/actions/sign-in"
import { SignInSchema, SignInType } from "@/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { PasswordInput } from "@/components/password-input"

export default function SignInForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "nhatvmse172011@fpt.edu.vn",
      password: "Password123!",
    },
  })

  async function onSubmit(values: SignInType) {
    setError("")
    setSuccess("")
    startTransition(() => {
      signIn({
        values,
        callbackUrl,
      })
        .then((data) => {
          if (data?.error) {
            setError(data.error)
          }
        })
        .catch(() => {
          setError("An unexpected error occurred while signing in.")
        })
    })
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // TODO: FIX Style
        className="w-[400px] space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </Label>
              <FormControl>
                <Input type="text" placeholder="abc@example.com" {...field} />
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
              <Label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </Label>
              <FormControl>
                <PasswordInput type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormError message={error} />
        <FormSuccess message={success} />

        <Button
          className="w-full"
          type="submit"
          disabled={isPending}
          isLoading={isPending}
          loadingText="Verifying"
        >
          Sign in
        </Button>
      </form>
    </Form>
  )
}
