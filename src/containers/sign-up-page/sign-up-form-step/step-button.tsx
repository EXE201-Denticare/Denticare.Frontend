"use client"

import Link from "next/link"

import useSignUpStepStore from "@/stores/use-sign-up-store"

import { Button } from "@/components/ui/button"

export default function StepButton() {
  const { currentStep, setCurrentStep } = useSignUpStepStore()

  return (
    <div className="flex w-full flex-col items-center gap-3">
      {currentStep === 2 ? (
        <div className="flex w-full items-center gap-x-2">
          <Button
            variant="outline"
            type="button"
            className="w-full"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </Button>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </div>
      ) : (
        <Button
          type="submit"
          className="w-full"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Continue
        </Button>
      )}

      <div className="flex items-center justify-center text-sm">
        <span className="text-sm text-dark-600">Already have an account?</span>
        <Link
          href="/auth/sign-in"
          className="ml-2 text-primary hover:underline"
        >
          Sign In
        </Link>
      </div>
    </div>
  )
}
