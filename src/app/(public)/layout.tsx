import React from "react"

import SiteHeader from "@/components/layouts/public/site-header"
import TopBar from "@/components/layouts/public/top-bar"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopBar />
      <SiteHeader />
      {children}
    </div>
  )
}

export default Layout
