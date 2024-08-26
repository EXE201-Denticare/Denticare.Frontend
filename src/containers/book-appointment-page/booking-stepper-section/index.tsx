"use client"

import React from "react"

import ChooseServiceSection from "@/containers/book-appointment-page/choose-service-section"
import { CalendarCheck, Clock, LayoutList } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"

import { Step, StepItem, Stepper, useStepper } from "@/components/stepper"

const steps = [
  { label: "Chọn dịch vụ", icon: LayoutList },
  { label: "Chọn ngày đặt lịch", icon: Clock },
  { label: "Kiểm tra lại lịch đặt", icon: CalendarCheck },
] satisfies StepItem[]

export default function BookingStepperSection() {
  const { currentStep } = useStepper()

  return (
    <div className="flex w-full flex-col gap-4">
      <Stepper initialStep={0} steps={steps}>
        {steps.map((stepProps, index) => {
          if (index === 0) {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <ChooseServiceSection />
              </Step>
            )
          }

          if (index === 1) {
            return (
              <Step key={stepProps.label} {...stepProps}>
                <p>Step 2</p>
              </Step>
            )
          }
          return (
            <Step key={stepProps.label} {...stepProps}>
              <div className="my-2 flex h-96 items-center justify-center rounded-md border bg-secondary text-primary">
                <h1 className="text-xl">Step {index + 1} </h1>
              </div>
            </Step>
          )
        })}
        <StepperButtonSection />
      </Stepper>
    </div>
  )
}

function StepperButtonSection() {
  const {
    nextStep,
    prevStep,
    resetSteps,
    hasCompletedAllSteps,
    isLastStep,
    isOptionalStep,
    isDisabledStep,
  } = useStepper()
  return (
    <React.Fragment>
      <div className="flex h-20 w-full items-center justify-end gap-2 bg-white p-2">
        {hasCompletedAllSteps ? (
          <Button onClick={resetSteps}>Reset</Button>
        ) : (
          <React.Fragment>
            <Button
              disabled={isDisabledStep}
              onClick={prevStep}
              variant="secondary"
              className={cn(isDisabledStep && "hidden")}
            >
              Prev
            </Button>
            <Button onClick={nextStep}>
              {isLastStep ? "Finish" : isOptionalStep ? "Skip" : "Next"}
            </Button>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  )
}
