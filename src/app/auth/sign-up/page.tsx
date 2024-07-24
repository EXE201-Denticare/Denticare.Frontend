import React from "react"

import { Metadata } from "next"
import Image from "next/image"

import SignUpFormStep from "@/containers/sign-up-page/sign-up-form-step"
import FormProvider from "@/containers/sign-up-page/sign-up-form-step/form-provider"
import StepButton from "@/containers/sign-up-page/sign-up-form-step/step-button"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to DentiCare",
}
export default function Page() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <FormProvider>
            <div className="flex flex-col gap-3 py-4">
              <SignUpFormStep />
              <StepButton />
            </div>
          </FormProvider>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  )
}
