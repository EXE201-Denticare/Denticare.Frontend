import HeroSection from "@/containers/landing-page/hero-section"
import SuggestClinicSection from "@/containers/landing-page/suggest-clinic-section"

export default async function Page() {
  return (
    <div className="flex flex-col space-y-16 pb-16">
      <HeroSection />
      {/* <BannerSection /> */}
      <SuggestClinicSection />
    </div>
  )
}
