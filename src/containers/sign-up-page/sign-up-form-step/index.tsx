"use client"

import SignUpFormDetail from "@/containers/sign-up-page/sign-up-form-step/sign-up-form-detail"
import UserTypeSelection from "@/containers/sign-up-page/user-type-selection"
import useSignUpStepStore from "@/stores/use-sign-up-store"

export default function SignUpFormStep() {
  const { currentStep, userType, setUserType } = useSignUpStepStore()

  switch (currentStep) {
    case 1:
      return <UserTypeSelection userType={userType} setUserType={setUserType} />
    case 2:
      return <SignUpFormDetail />
    default:
      return null
  }
}
