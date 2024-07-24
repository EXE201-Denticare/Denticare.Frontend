import React from "react"

import UserTypeCard from "@/containers/sign-up-page/user-type-selection/user-type-card"

type Props = {
  userType: "owner" | "customer"
  setUserType: (userType: "customer" | "owner") => void
}

function UserTypeSelection({ setUserType, userType }: Props) {
  return (
    <React.Fragment>
      <section className="mb-12 space-y-4">
        <h1 className="header">Create an account</h1>
        <p className="text-iridium md:text-sm">
          Tell us about yourself! Are you a customer or an owner?
          <br /> Let’s tailor your DentiCare experience to best suit your needs.
        </p>
      </section>

      <UserTypeCard
        setUserType={setUserType}
        userType={userType}
        value="customer"
        title="I am a customer"
        text="I am looking for a clinic."
      />
      <UserTypeCard
        setUserType={setUserType}
        userType={userType}
        value="owner"
        title="I own a clinic"
        text="Setting up account for my clinics."
      />
    </React.Fragment>
  )
}

export default UserTypeSelection
