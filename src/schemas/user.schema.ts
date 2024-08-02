import * as z from "zod"

export enum Sex {
  MALE = 1,
  FEMALE = 2,
  OTHER = 3,
}

export enum Role {
  CUSTOMER = "CUS",
  OWNER = "CO",
  SYSTEM_ADMIN = "SA",
  DENTIST = "DE",
}

export const UserSchema = z.object({
  id: z.string().uuid({ message: "Invalid ID" }),
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  image: z.string().url({ message: "Invalid image URL" }),
  phoneNumber: z.string().regex(/^\d{10,11}$/, {
    message: "Invalid phone number format",
  }),
  dateOfBirth: z.string().refine((date) => !Number.isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  address: z.string(),
  sex: z.nativeEnum(Sex),
  role: z.nativeEnum(Role),
})

export type UserType = z.infer<typeof UserSchema>
