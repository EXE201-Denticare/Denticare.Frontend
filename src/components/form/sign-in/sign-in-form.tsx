"use client"

import { useState, useTransition } from "react"

import Link from "next/link"
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

import { FormError } from "@/components/form/form-error"
import { FormSuccess } from "@/components/form/form-success"
import { PasswordInput } from "@/components/input/password-input"
import { SocialSection } from "@/components/social-section"

export default function SignInForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : ""

  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  const [isPending, startTransition] = useTransition()

  const form = useForm<SignInType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "nguyenvana@example.com",
      password: "Matkhau123!",
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
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome Back!</h1>
          <p className="text-iridium md:text-sm">
            Ready to brighten your smile? Sign in and join the Denticare family!
          </p>
        </section>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
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

        <FormError message={error || urlError} />
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

        <SocialSection isLoading={isPending} />

        <div className="flex items-center justify-center text-sm">
          <span className="text-dark-600">New to Denticare?</span>
          <Link
            href="/auth/sign-up"
            className="ml-2 text-primary hover:underline"
          >
            Create account
          </Link>
        </div>
      </form>
    </Form>
  )
}
