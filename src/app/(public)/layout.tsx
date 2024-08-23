import React from "react"

import SiteHeader from "@/components/layouts/public/site-header"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  )
}

export default Layout
