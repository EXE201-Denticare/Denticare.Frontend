import HeroSection from "@/containers/landing-page/hero-section"
import SuggestClinicSection from "@/containers/landing-page/suggest-clinic-section"

export default async function Page() {
  return (
    <div className="flex h-[200vh] flex-col space-y-16">
      <HeroSection />
      <SuggestClinicSection />
    </div>
  )
}
