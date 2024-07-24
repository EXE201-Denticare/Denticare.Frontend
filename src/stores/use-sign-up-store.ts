import { create } from "zustand"

type SignUpStepStoreProps = {
  userType: "customer" | "owner"
  setUserType: (userType: "customer" | "owner") => void
  currentStep: number
  setCurrentStep: (step: number) => void
}

const useSignUpStepStore = create<SignUpStepStoreProps>((set) => ({
  userType: "customer",
  setUserType: (userType) => set({ userType }),
  currentStep: 1,
  setCurrentStep: (step) => set({ currentStep: step }),
}))

export default useSignUpStepStore
