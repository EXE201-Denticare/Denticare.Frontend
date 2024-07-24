"use client"

import React from "react"

import { SignUpCustomerSchema, SignUpCustomerType } from "@/schemas/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Form } from "@/components/ui/form"

export default function FormProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const form = useForm<SignUpCustomerType>({
    resolver: zodResolver(SignUpCustomerSchema),
  })

  async function onSubmit(values: SignUpCustomerType) {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  )
}
