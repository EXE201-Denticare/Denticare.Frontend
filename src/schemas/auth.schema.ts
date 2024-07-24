import * as z from "zod"
import { Sex } from "@/schemas/user.schema"

export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export type SignInType = z.infer<typeof SignInSchema>

export const SignUpCustomerSchema = z
  .object({
    fullName: z.string({ message: "Full name is required" }),
    phone: z
      .string({ message: "Phone number is required" })
      .regex(/^\+\d{1,3}\d{4,14}(?:x\d+)?$/, {
        message: "Invalid phone number format",
      }),

    email: z
      .string({ message: "Email is required" })
      .email({ message: "Invalid email" }),
    dob: z.date({ message: "Date of birth is required" }),
    gender: z.nativeEnum(Sex, { message: "Gender is required" }),
    password: z
      .string({ message: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .refine((value) => /[!@#]/.test(value), {
        message: "Password must contain at least one special character (!,@,#)",
      }),
    confirmPassword: z.string({ message: "Confirm password is required" }),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type SignUpCustomerType = z.infer<typeof SignUpCustomerSchema>

export const SignUpOwnerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .refine((value) => /[!@#]/.test(value), {
        message: "Password must contain at least one special character (!,@,#)",
      }),
    confirmPassword: z.string(),
  })
  .refine((schema) => schema.password === schema.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export type SignUpOwnerType = z.infer<typeof SignUpOwnerSchema>
