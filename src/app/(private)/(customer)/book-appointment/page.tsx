import BookingStepperSection from "@/containers/book-appointment-page/booking-stepper-section"
import ClinicInfoSection from "@/containers/book-appointment-page/clinic-info-section"

import { Separator } from "@/components/ui/separator"

import MaxWidthWrapper from "@/components/layouts/max-width-wrapper"

export default function Page({ params }: { params: { clinicId: string } }) {
  return (
    <MaxWidthWrapper className="h-[300vh]">
      <div className="my-14 space-y-10">
        <ClinicInfoSection />

        <Separator />

        <section>
          <BookingStepperSection />
        </section>
      </div>
    </MaxWidthWrapper>
  )
}
