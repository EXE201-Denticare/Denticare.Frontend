import React from "react"

import Footer from "@/containers/landing-page/footer"

import SiteHeader from "@/components/layouts/public/site-header"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
