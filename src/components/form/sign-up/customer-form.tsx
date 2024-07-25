"use client"

import { Field, Radio, RadioGroup } from "@headlessui/react"
import { useFormContext } from "react-hook-form"

import { FormControl } from "@/components/ui/form"
import { Label } from "@/components/ui/label"

import FormFieldGenerator, {
  FormFieldType,
} from "@/components/form/form-field-generator"

export default function CustomerForm() {
  const form = useFormContext()

  const GenderOptions = [
    { name: "Male", value: 1 },
    { name: "Female", value: 2 },
    { name: "Other", value: 3 },
  ]

  return (
    <div>
      <section className="space-y-6">
        <div className="mb-9 space-y-1">
          <h2 className="sub-header">Personal Information</h2>
        </div>

        <FormFieldGenerator
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="fullName"
          placeholder="ex: John Doe"
          label="Full Name"
        />

        {/* Email and Phone Number */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <FormFieldGenerator
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            placeholder="ex: example@email.com"
            label="Email"
          />
          <FormFieldGenerator
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            placeholder="ex: +84 123 456 789"
            label="Phone Number"
          />
        </div>

        {/* DOB & Gender */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <FormFieldGenerator
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="dob"
            placeholder="ex: 10/12/2000"
            label="Date of Birth"
          />
          <FormFieldGenerator
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-10 gap-6 xl:justify-between"
                  onChange={(value) => field.onChange(value)}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option) => (
                    <Field
                      key={option.name}
                      className="flex h-full flex-1 items-center gap-2 rounded-md border p-3"
                    >
                      <Radio
                        value={option.value}
                        className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-primary"
                      >
                        <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                      </Radio>
                      <Label>{option.name}</Label>
                    </Field>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <FormFieldGenerator
            fieldType={FormFieldType.INPUT_PASSWORD}
            control={form.control}
            name="password"
            placeholder="ex: Password@123"
            label="Password"
            inputType="password"
          />
          <FormFieldGenerator
            fieldType={FormFieldType.INPUT_PASSWORD}
            control={form.control}
            name="confirmPassword"
            placeholder="ex: Password@123"
            inputType="password"
            label="Confirm Password"
          />
        </div>
      </section>
    </div>
  )
}
