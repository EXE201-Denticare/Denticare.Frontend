import { Inter } from "next/font/google"

import { auth } from "@/auth"
import { constructMetadata } from "@/configs/site"
import { ReactQueryClientProvider } from "@/providers/react-query-client-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import TailwindIndicator from "@/tools/tailwind-indicator"
import { SessionProvider } from "next-auth/react"

import { Toaster } from "@/components/ui/sonner"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = constructMetadata()

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ReactQueryClientProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <Toaster position="top-right" />
              <main className="flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
                <div className="flex h-full flex-1 flex-col">{children}</div>
              </main>
              <TailwindIndicator />
            </ThemeProvider>
          </ReactQueryClientProvider>
        </body>
      </html>
    </SessionProvider>
  )
}
