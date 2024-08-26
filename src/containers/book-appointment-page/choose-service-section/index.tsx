import BookingInfoSection from "@/containers/book-appointment-page/booking-info-section"
import ServiceCardList from "@/containers/book-appointment-page/choose-service-section/service-card-list"

export default function ChooseServiceSection() {
  return (
    <div className="mt-4 flex w-full gap-x-10">
      <section className="w-2/3">
        <ServiceCardList />
      </section>

      <section className="w-1/3">
        <BookingInfoSection />
      </section>
    </div>
  )
}
