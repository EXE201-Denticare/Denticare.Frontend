"use client"

import useSignUpStepStore from "@/stores/use-sign-up-store"

import CustomerForm from "@/components/form/sign-up/customer-form"
import OwnerForm from "@/components/form/sign-up/owner-form"

export default function SignUpFormDetail() {
  const { userType } = useSignUpStepStore()

  return (
    <div className="flex-1 space-y-12">
      <section className="space-y-4">
        <h1 className="header">Welcome to Denticare! 👋</h1>
        <p className="text-iridium">
          We&apos;re excited to get to know you better. Tell us a bit about
          yourself!
        </p>
      </section>

      {userType === "customer" && <CustomerForm />}
      {userType === "owner" && <OwnerForm />}
    </div>
  )
}
